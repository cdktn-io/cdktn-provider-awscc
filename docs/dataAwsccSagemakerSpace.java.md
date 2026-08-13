# `dataAwsccSagemakerSpace` Submodule <a name="`dataAwsccSagemakerSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerSpace <a name="DataAwsccSagemakerSpace" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_space awscc_sagemaker_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpace;

DataAwsccSagemakerSpace.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_space#id DataAwsccSagemakerSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpace;

DataAwsccSagemakerSpace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpace;

DataAwsccSagemakerSpace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpace;

DataAwsccSagemakerSpace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpace;

DataAwsccSagemakerSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSagemakerSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSagemakerSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSagemakerSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSagemakerSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference">DataAwsccSagemakerSpaceOwnershipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceArn">spaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceName">spaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList">DataAwsccSagemakerSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `ownershipSettings`<sup>Required</sup> <a name="ownershipSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.ownershipSettings"></a>

```java
public DataAwsccSagemakerSpaceOwnershipSettingsOutputReference getOwnershipSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference">DataAwsccSagemakerSpaceOwnershipSettingsOutputReference</a>

---

##### `spaceArn`<sup>Required</sup> <a name="spaceArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceArn"></a>

```java
public java.lang.String getSpaceArn();
```

- *Type:* java.lang.String

---

##### `spaceDisplayName`<sup>Required</sup> <a name="spaceDisplayName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceDisplayName"></a>

```java
public java.lang.String getSpaceDisplayName();
```

- *Type:* java.lang.String

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceName"></a>

```java
public java.lang.String getSpaceName();
```

- *Type:* java.lang.String

---

##### `spaceSettings`<sup>Required</sup> <a name="spaceSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsOutputReference getSpaceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsOutputReference</a>

---

##### `spaceSharingSettings`<sup>Required</sup> <a name="spaceSharingSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.spaceSharingSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference getSpaceSharingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.tags"></a>

```java
public DataAwsccSagemakerSpaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList">DataAwsccSagemakerSpaceTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerSpaceConfig <a name="DataAwsccSagemakerSpaceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceConfig;

DataAwsccSagemakerSpaceConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_space#id DataAwsccSagemakerSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerSpaceOwnershipSettings <a name="DataAwsccSagemakerSpaceOwnershipSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceOwnershipSettings;

DataAwsccSagemakerSpaceOwnershipSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettings <a name="DataAwsccSagemakerSpaceSpaceSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettings;

DataAwsccSagemakerSpaceSpaceSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings;

DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;

DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;

DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;

DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems;

DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem;

DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem;

DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem;

DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings;

DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;

DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;

DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories;

DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;

DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings;

DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;

DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings;

DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages;

DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;

DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings;

DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings <a name="DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;

DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceSpaceSharingSettings <a name="DataAwsccSagemakerSpaceSpaceSharingSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSharingSettings;

DataAwsccSagemakerSpaceSpaceSharingSettings.builder()
    .build();
```


### DataAwsccSagemakerSpaceTags <a name="DataAwsccSagemakerSpaceTags" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceTags;

DataAwsccSagemakerSpaceTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerSpaceOwnershipSettingsOutputReference <a name="DataAwsccSagemakerSpaceOwnershipSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference;

new DataAwsccSagemakerSpaceOwnershipSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettings">DataAwsccSagemakerSpaceOwnershipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerUserProfileName`<sup>Required</sup> <a name="ownerUserProfileName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName"></a>

```java
public java.lang.String getOwnerUserProfileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceOwnershipSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceOwnershipSettings">DataAwsccSagemakerSpaceOwnershipSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList;

new DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.get"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystem">fsxLustreFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystem">s3FileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efsFileSystem`<sup>Required</sup> <a name="efsFileSystem" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystem"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference getEfsFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference</a>

---

##### `fsxLustreFileSystem`<sup>Required</sup> <a name="fsxLustreFileSystem" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystem"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference getFsxLustreFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference</a>

---

##### `s3FileSystem`<sup>Required</sup> <a name="s3FileSystem" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystem"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference getS3FileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystems</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">codeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `codeRepositories`<sup>Required</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList getCodeRepositories();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList;

new DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList getCustomImages();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.appType">appType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.customFileSystems">customFileSystems</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.remoteAccess">remoteAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResources">spaceManagedResources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettings">DataAwsccSagemakerSpaceSpaceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appType`<sup>Required</sup> <a name="appType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystems`<sup>Required</sup> <a name="customFileSystems" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.customFileSystems"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList getCustomFileSystems();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList">DataAwsccSagemakerSpaceSpaceSettingsCustomFileSystemsList</a>

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `remoteAccess`<sup>Required</sup> <a name="remoteAccess" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.remoteAccess"></a>

```java
public java.lang.String getRemoteAccess();
```

- *Type:* java.lang.String

---

##### `spaceManagedResources`<sup>Required</sup> <a name="spaceManagedResources" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResources"></a>

```java
public java.lang.String getSpaceManagedResources();
```

- *Type:* java.lang.String

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettings">DataAwsccSagemakerSpaceSpaceSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumeSizeInGb`<sup>Required</sup> <a name="ebsVolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb"></a>

```java
public java.lang.Number getEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsStorageSettings`<sup>Required</sup> <a name="ebsStorageSettings" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference getEbsStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings">DataAwsccSagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---


### DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference <a name="DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference;

new DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType">sharingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettings">DataAwsccSagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sharingType`<sup>Required</sup> <a name="sharingType" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType"></a>

```java
public java.lang.String getSharingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceSpaceSharingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceSpaceSharingSettings">DataAwsccSagemakerSpaceSpaceSharingSettings</a>

---


### DataAwsccSagemakerSpaceTagsList <a name="DataAwsccSagemakerSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceTagsList;

new DataAwsccSagemakerSpaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.get"></a>

```java
public DataAwsccSagemakerSpaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerSpaceTagsOutputReference <a name="DataAwsccSagemakerSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_space.DataAwsccSagemakerSpaceTagsOutputReference;

new DataAwsccSagemakerSpaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTags">DataAwsccSagemakerSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerSpaceTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerSpace.DataAwsccSagemakerSpaceTags">DataAwsccSagemakerSpaceTags</a>

---



