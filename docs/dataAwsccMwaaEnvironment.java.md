# `dataAwsccMwaaEnvironment` Submodule <a name="`dataAwsccMwaaEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMwaaEnvironment <a name="DataAwsccMwaaEnvironment" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment awscc_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironment;

DataAwsccMwaaEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment#id DataAwsccMwaaEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironment;

DataAwsccMwaaEnvironment.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironment;

DataAwsccMwaaEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironment;

DataAwsccMwaaEnvironment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironment;

DataAwsccMwaaEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccMwaaEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccMwaaEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccMwaaEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMwaaEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowVersion">airflowVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.celeryExecutorQueue">celeryExecutorQueue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dagS3Path">dagS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.databaseVpcEndpointService">databaseVpcEndpointService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.endpointManagement">endpointManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.environmentClass">environmentClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWebservers">maxWebservers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWebservers">minWebservers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference">DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3Path">pluginsS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3Path">requirementsS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.schedulers">schedulers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.sourceBucketArn">sourceBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3ObjectVersion">startupScriptS3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3Path">startupScriptS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverAccessMode">webserverAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverUrl">webserverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverVpcEndpointService">webserverVpcEndpointService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.workerReplacementStrategy">workerReplacementStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowConfigurationOptions"></a>

```java
public java.lang.String getAirflowConfigurationOptions();
```

- *Type:* java.lang.String

---

##### `airflowVersion`<sup>Required</sup> <a name="airflowVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowVersion"></a>

```java
public java.lang.String getAirflowVersion();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `celeryExecutorQueue`<sup>Required</sup> <a name="celeryExecutorQueue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.celeryExecutorQueue"></a>

```java
public java.lang.String getCeleryExecutorQueue();
```

- *Type:* java.lang.String

---

##### `dagS3Path`<sup>Required</sup> <a name="dagS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dagS3Path"></a>

```java
public java.lang.String getDagS3Path();
```

- *Type:* java.lang.String

---

##### `databaseVpcEndpointService`<sup>Required</sup> <a name="databaseVpcEndpointService" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.databaseVpcEndpointService"></a>

```java
public java.lang.String getDatabaseVpcEndpointService();
```

- *Type:* java.lang.String

---

##### `endpointManagement`<sup>Required</sup> <a name="endpointManagement" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.endpointManagement"></a>

```java
public java.lang.String getEndpointManagement();
```

- *Type:* java.lang.String

---

##### `environmentClass`<sup>Required</sup> <a name="environmentClass" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.environmentClass"></a>

```java
public java.lang.String getEnvironmentClass();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.loggingConfiguration"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `maxWebservers`<sup>Required</sup> <a name="maxWebservers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWebservers"></a>

```java
public java.lang.Number getMaxWebservers();
```

- *Type:* java.lang.Number

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `minWebservers`<sup>Required</sup> <a name="minWebservers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWebservers"></a>

```java
public java.lang.Number getMinWebservers();
```

- *Type:* java.lang.Number

---

##### `minWorkers`<sup>Required</sup> <a name="minWorkers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.networkConfiguration"></a>

```java
public DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference">DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `pluginsS3ObjectVersion`<sup>Required</sup> <a name="pluginsS3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```java
public java.lang.String getPluginsS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `pluginsS3Path`<sup>Required</sup> <a name="pluginsS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3Path"></a>

```java
public java.lang.String getPluginsS3Path();
```

- *Type:* java.lang.String

---

##### `requirementsS3ObjectVersion`<sup>Required</sup> <a name="requirementsS3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```java
public java.lang.String getRequirementsS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `requirementsS3Path`<sup>Required</sup> <a name="requirementsS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3Path"></a>

```java
public java.lang.String getRequirementsS3Path();
```

- *Type:* java.lang.String

---

##### `schedulers`<sup>Required</sup> <a name="schedulers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.schedulers"></a>

```java
public java.lang.Number getSchedulers();
```

- *Type:* java.lang.Number

---

##### `sourceBucketArn`<sup>Required</sup> <a name="sourceBucketArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.sourceBucketArn"></a>

```java
public java.lang.String getSourceBucketArn();
```

- *Type:* java.lang.String

---

##### `startupScriptS3ObjectVersion`<sup>Required</sup> <a name="startupScriptS3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3ObjectVersion"></a>

```java
public java.lang.String getStartupScriptS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `startupScriptS3Path`<sup>Required</sup> <a name="startupScriptS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3Path"></a>

```java
public java.lang.String getStartupScriptS3Path();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

##### `webserverAccessMode`<sup>Required</sup> <a name="webserverAccessMode" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverAccessMode"></a>

```java
public java.lang.String getWebserverAccessMode();
```

- *Type:* java.lang.String

---

##### `webserverUrl`<sup>Required</sup> <a name="webserverUrl" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverUrl"></a>

```java
public java.lang.String getWebserverUrl();
```

- *Type:* java.lang.String

---

##### `webserverVpcEndpointService`<sup>Required</sup> <a name="webserverVpcEndpointService" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverVpcEndpointService"></a>

```java
public java.lang.String getWebserverVpcEndpointService();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindowStart`<sup>Required</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `workerReplacementStrategy`<sup>Required</sup> <a name="workerReplacementStrategy" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.workerReplacementStrategy"></a>

```java
public java.lang.String getWorkerReplacementStrategy();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMwaaEnvironmentConfig <a name="DataAwsccMwaaEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentConfig;

DataAwsccMwaaEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaa_environment#id DataAwsccMwaaEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMwaaEnvironmentLoggingConfiguration <a name="DataAwsccMwaaEnvironmentLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfiguration;

DataAwsccMwaaEnvironmentLoggingConfiguration.builder()
    .build();
```


### DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs;

DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs.builder()
    .build();
```


### DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs;

DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs.builder()
    .build();
```


### DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs;

DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs.builder()
    .build();
```


### DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs;

DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs.builder()
    .build();
```


### DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs;

DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs.builder()
    .build();
```


### DataAwsccMwaaEnvironmentNetworkConfiguration <a name="DataAwsccMwaaEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentNetworkConfiguration;

DataAwsccMwaaEnvironmentNetworkConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference;

new DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference;

new DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">dagProcessingLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">schedulerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">taskLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">webserverLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">workerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration">DataAwsccMwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dagProcessingLogs`<sup>Required</sup> <a name="dagProcessingLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference getDagProcessingLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `schedulerLogs`<sup>Required</sup> <a name="schedulerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference getSchedulerLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `taskLogs`<sup>Required</sup> <a name="taskLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference getTaskLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `webserverLogs`<sup>Required</sup> <a name="webserverLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference getWebserverLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `workerLogs`<sup>Required</sup> <a name="workerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference getWorkerLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration">DataAwsccMwaaEnvironmentLoggingConfiguration</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference;

new DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference;

new DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference;

new DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference;

new DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference <a name="DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_mwaa_environment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference;

new DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration">DataAwsccMwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccMwaaEnvironmentNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration">DataAwsccMwaaEnvironmentNetworkConfiguration</a>

---



