# `dataAwsccIotJob` Submodule <a name="`dataAwsccIotJob` Submodule" id="@cdktn/provider-awscc.dataAwsccIotJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotJob <a name="DataAwsccIotJob" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job awscc_iot_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJob;

DataAwsccIotJob.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job#id DataAwsccIotJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJob;

DataAwsccIotJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJob;

DataAwsccIotJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJob;

DataAwsccIotJob.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJob;

DataAwsccIotJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccIotJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccIotJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccIotJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccIotJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference">DataAwsccIotJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.document">document</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentParameters">documentParameters</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentSource">documentSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference">DataAwsccIotJobJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobTemplateArn">jobTemplateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference">DataAwsccIotJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference">DataAwsccIotJobSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList">DataAwsccIotJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference">DataAwsccIotJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `abortConfig`<sup>Required</sup> <a name="abortConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.abortConfig"></a>

```java
public DataAwsccIotJobAbortConfigOutputReference getAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference">DataAwsccIotJobAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationPackageVersions`<sup>Required</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.destinationPackageVersions"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

---

##### `documentParameters`<sup>Required</sup> <a name="documentParameters" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentParameters"></a>

```java
public StringMap getDocumentParameters();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `documentSource`<sup>Required</sup> <a name="documentSource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentSource"></a>

```java
public java.lang.String getDocumentSource();
```

- *Type:* java.lang.String

---

##### `jobExecutionsRetryConfig`<sup>Required</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRetryConfig"></a>

```java
public DataAwsccIotJobJobExecutionsRetryConfigOutputReference getJobExecutionsRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference">DataAwsccIotJobJobExecutionsRetryConfigOutputReference</a>

---

##### `jobExecutionsRolloutConfig`<sup>Required</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRolloutConfig"></a>

```java
public DataAwsccIotJobJobExecutionsRolloutConfigOutputReference getJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigOutputReference</a>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobTemplateArn`<sup>Required</sup> <a name="jobTemplateArn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobTemplateArn"></a>

```java
public java.lang.String getJobTemplateArn();
```

- *Type:* java.lang.String

---

##### `presignedUrlConfig`<sup>Required</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.presignedUrlConfig"></a>

```java
public DataAwsccIotJobPresignedUrlConfigOutputReference getPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference">DataAwsccIotJobPresignedUrlConfigOutputReference</a>

---

##### `schedulingConfig`<sup>Required</sup> <a name="schedulingConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.schedulingConfig"></a>

```java
public DataAwsccIotJobSchedulingConfigOutputReference getSchedulingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference">DataAwsccIotJobSchedulingConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tags"></a>

```java
public DataAwsccIotJobTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList">DataAwsccIotJobTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetSelection`<sup>Required</sup> <a name="targetSelection" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targetSelection"></a>

```java
public java.lang.String getTargetSelection();
```

- *Type:* java.lang.String

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.timeoutConfig"></a>

```java
public DataAwsccIotJobTimeoutConfigOutputReference getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference">DataAwsccIotJobTimeoutConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotJobAbortConfig <a name="DataAwsccIotJobAbortConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobAbortConfig;

DataAwsccIotJobAbortConfig.builder()
    .build();
```


### DataAwsccIotJobAbortConfigCriteriaListStruct <a name="DataAwsccIotJobAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobAbortConfigCriteriaListStruct;

DataAwsccIotJobAbortConfigCriteriaListStruct.builder()
    .build();
```


### DataAwsccIotJobConfig <a name="DataAwsccIotJobConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobConfig;

DataAwsccIotJobConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job#id DataAwsccIotJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotJobJobExecutionsRetryConfig <a name="DataAwsccIotJobJobExecutionsRetryConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRetryConfig;

DataAwsccIotJobJobExecutionsRetryConfig.builder()
    .build();
```


### DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct <a name="DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct;

DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct.builder()
    .build();
```


### DataAwsccIotJobJobExecutionsRolloutConfig <a name="DataAwsccIotJobJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRolloutConfig;

DataAwsccIotJobJobExecutionsRolloutConfig.builder()
    .build();
```


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate;

DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate.builder()
    .build();
```


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;

DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.builder()
    .build();
```


### DataAwsccIotJobPresignedUrlConfig <a name="DataAwsccIotJobPresignedUrlConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobPresignedUrlConfig;

DataAwsccIotJobPresignedUrlConfig.builder()
    .build();
```


### DataAwsccIotJobSchedulingConfig <a name="DataAwsccIotJobSchedulingConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobSchedulingConfig;

DataAwsccIotJobSchedulingConfig.builder()
    .build();
```


### DataAwsccIotJobSchedulingConfigMaintenanceWindows <a name="DataAwsccIotJobSchedulingConfigMaintenanceWindows" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobSchedulingConfigMaintenanceWindows;

DataAwsccIotJobSchedulingConfigMaintenanceWindows.builder()
    .build();
```


### DataAwsccIotJobTags <a name="DataAwsccIotJobTags" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobTags;

DataAwsccIotJobTags.builder()
    .build();
```


### DataAwsccIotJobTimeoutConfig <a name="DataAwsccIotJobTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobTimeoutConfig;

DataAwsccIotJobTimeoutConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotJobAbortConfigCriteriaListStructList <a name="DataAwsccIotJobAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobAbortConfigCriteriaListStructList;

new DataAwsccIotJobAbortConfigCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.get"></a>

```java
public DataAwsccIotJobAbortConfigCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccIotJobAbortConfigCriteriaListStructOutputReference <a name="DataAwsccIotJobAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference;

new DataAwsccIotJobAbortConfigCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct">DataAwsccIotJobAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobAbortConfigCriteriaListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct">DataAwsccIotJobAbortConfigCriteriaListStruct</a>

---


### DataAwsccIotJobAbortConfigOutputReference <a name="DataAwsccIotJobAbortConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobAbortConfigOutputReference;

new DataAwsccIotJobAbortConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList">DataAwsccIotJobAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig">DataAwsccIotJobAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.criteriaList"></a>

```java
public DataAwsccIotJobAbortConfigCriteriaListStructList getCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList">DataAwsccIotJobAbortConfigCriteriaListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobAbortConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig">DataAwsccIotJobAbortConfig</a>

---


### DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList <a name="DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList;

new DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.get"></a>

```java
public DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference <a name="DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference;

new DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries">numberOfRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `numberOfRetries`<sup>Required</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries"></a>

```java
public java.lang.Number getNumberOfRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct</a>

---


### DataAwsccIotJobJobExecutionsRetryConfigOutputReference <a name="DataAwsccIotJobJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRetryConfigOutputReference;

new DataAwsccIotJobJobExecutionsRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig">DataAwsccIotJobJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.criteriaList"></a>

```java
public DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList getCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobJobExecutionsRetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig">DataAwsccIotJobJobExecutionsRetryConfig</a>

---


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference;

new DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```java
public DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate</a>

---


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference;

new DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### DataAwsccIotJobJobExecutionsRolloutConfigOutputReference <a name="DataAwsccIotJobJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference;

new DataAwsccIotJobJobExecutionsRolloutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig">DataAwsccIotJobJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exponentialRate`<sup>Required</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```java
public DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference getExponentialRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobJobExecutionsRolloutConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig">DataAwsccIotJobJobExecutionsRolloutConfig</a>

---


### DataAwsccIotJobPresignedUrlConfigOutputReference <a name="DataAwsccIotJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobPresignedUrlConfigOutputReference;

new DataAwsccIotJobPresignedUrlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig">DataAwsccIotJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobPresignedUrlConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig">DataAwsccIotJobPresignedUrlConfig</a>

---


### DataAwsccIotJobSchedulingConfigMaintenanceWindowsList <a name="DataAwsccIotJobSchedulingConfigMaintenanceWindowsList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList;

new DataAwsccIotJobSchedulingConfigMaintenanceWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.get"></a>

```java
public DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference <a name="DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference;

new DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows">DataAwsccIotJobSchedulingConfigMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobSchedulingConfigMaintenanceWindows getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows">DataAwsccIotJobSchedulingConfigMaintenanceWindows</a>

---


### DataAwsccIotJobSchedulingConfigOutputReference <a name="DataAwsccIotJobSchedulingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobSchedulingConfigOutputReference;

new DataAwsccIotJobSchedulingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endBehavior">endBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList">DataAwsccIotJobSchedulingConfigMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig">DataAwsccIotJobSchedulingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endBehavior`<sup>Required</sup> <a name="endBehavior" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endBehavior"></a>

```java
public java.lang.String getEndBehavior();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.maintenanceWindows"></a>

```java
public DataAwsccIotJobSchedulingConfigMaintenanceWindowsList getMaintenanceWindows();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList">DataAwsccIotJobSchedulingConfigMaintenanceWindowsList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobSchedulingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig">DataAwsccIotJobSchedulingConfig</a>

---


### DataAwsccIotJobTagsList <a name="DataAwsccIotJobTagsList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobTagsList;

new DataAwsccIotJobTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.get"></a>

```java
public DataAwsccIotJobTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccIotJobTagsOutputReference <a name="DataAwsccIotJobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobTagsOutputReference;

new DataAwsccIotJobTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags">DataAwsccIotJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags">DataAwsccIotJobTags</a>

---


### DataAwsccIotJobTimeoutConfigOutputReference <a name="DataAwsccIotJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_iot_job.DataAwsccIotJobTimeoutConfigOutputReference;

new DataAwsccIotJobTimeoutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig">DataAwsccIotJobTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccIotJobTimeoutConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig">DataAwsccIotJobTimeoutConfig</a>

---



