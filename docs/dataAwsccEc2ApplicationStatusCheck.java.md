# `dataAwsccEc2ApplicationStatusCheck` Submodule <a name="`dataAwsccEc2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2ApplicationStatusCheck <a name="DataAwsccEc2ApplicationStatusCheck" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheck;

DataAwsccEc2ApplicationStatusCheck.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#id DataAwsccEc2ApplicationStatusCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheck;

DataAwsccEc2ApplicationStatusCheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheck;

DataAwsccEc2ApplicationStatusCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheck;

DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheck;

DataAwsccEc2ApplicationStatusCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEc2ApplicationStatusCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEc2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEc2ApplicationStatusCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEc2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.applicationStatusCheckId">applicationStatusCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.healthCheckPaths">healthCheckPaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.initializationGracePeriodSeconds">initializationGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipScope">ipScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList">DataAwsccEc2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `applicationStatusCheckId`<sup>Required</sup> <a name="applicationStatusCheckId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```java
public java.lang.String getApplicationStatusCheckId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `healthCheckPaths`<sup>Required</sup> <a name="healthCheckPaths" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.healthCheckPaths"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList getHealthCheckPaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `initializationGracePeriodSeconds`<sup>Required</sup> <a name="initializationGracePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```java
public java.lang.Number getInitializationGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `ipScope`<sup>Required</sup> <a name="ipScope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipScope"></a>

```java
public java.lang.String getIpScope();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `statusCodeMatcher`<sup>Required</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```java
public java.lang.String getStatusCodeMatcher();
```

- *Type:* java.lang.String

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tags"></a>

```java
public DataAwsccEc2ApplicationStatusCheckTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList">DataAwsccEc2ApplicationStatusCheckTagsList</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2ApplicationStatusCheckConfig <a name="DataAwsccEc2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckConfig;

DataAwsccEc2ApplicationStatusCheckConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#id DataAwsccEc2ApplicationStatusCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2ApplicationStatusCheckHealthCheckPaths <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths;

DataAwsccEc2ApplicationStatusCheckHealthCheckPaths.builder()
    .build();
```


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations;

DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations.builder()
    .build();
```


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource;

DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource.builder()
    .build();
```


### DataAwsccEc2ApplicationStatusCheckTags <a name="DataAwsccEc2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckTags;

DataAwsccEc2ApplicationStatusCheckTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList;

new DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference;

new DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList;

new DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference;

new DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths">DataAwsccEc2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPaths getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths">DataAwsccEc2ApplicationStatusCheckHealthCheckPaths</a>

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference;

new DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### DataAwsccEc2ApplicationStatusCheckTagsList <a name="DataAwsccEc2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckTagsList;

new DataAwsccEc2ApplicationStatusCheckTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get"></a>

```java
public DataAwsccEc2ApplicationStatusCheckTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEc2ApplicationStatusCheckTagsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_application_status_check.DataAwsccEc2ApplicationStatusCheckTagsOutputReference;

new DataAwsccEc2ApplicationStatusCheckTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags">DataAwsccEc2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2ApplicationStatusCheckTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags">DataAwsccEc2ApplicationStatusCheckTags</a>

---



