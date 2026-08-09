# `dataAwsccSagemakerModel` Submodule <a name="`dataAwsccSagemakerModel` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModel <a name="DataAwsccSagemakerModel" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model awscc_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModel;

DataAwsccSagemakerModel.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model#id DataAwsccSagemakerModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModel;

DataAwsccSagemakerModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModel;

DataAwsccSagemakerModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModel;

DataAwsccSagemakerModel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModel;

DataAwsccSagemakerModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSagemakerModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSagemakerModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSagemakerModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList">DataAwsccSagemakerModelContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.inferenceExecutionConfig">inferenceExecutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference">DataAwsccSagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference">DataAwsccSagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList">DataAwsccSagemakerModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference">DataAwsccSagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.containers"></a>

```java
public DataAwsccSagemakerModelContainersList getContainers();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList">DataAwsccSagemakerModelContainersList</a>

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.enableNetworkIsolation"></a>

```java
public IResolvable getEnableNetworkIsolation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `inferenceExecutionConfig`<sup>Required</sup> <a name="inferenceExecutionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.inferenceExecutionConfig"></a>

```java
public DataAwsccSagemakerModelInferenceExecutionConfigOutputReference getInferenceExecutionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference">DataAwsccSagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `primaryContainer`<sup>Required</sup> <a name="primaryContainer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.primaryContainer"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerOutputReference getPrimaryContainer();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference">DataAwsccSagemakerModelPrimaryContainerOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tags"></a>

```java
public DataAwsccSagemakerModelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList">DataAwsccSagemakerModelTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.vpcConfig"></a>

```java
public DataAwsccSagemakerModelVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference">DataAwsccSagemakerModelVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelConfig <a name="DataAwsccSagemakerModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelConfig;

DataAwsccSagemakerModelConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model#id DataAwsccSagemakerModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelContainers <a name="DataAwsccSagemakerModelContainers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainers;

DataAwsccSagemakerModelContainers.builder()
    .build();
```


### DataAwsccSagemakerModelContainersImageConfig <a name="DataAwsccSagemakerModelContainersImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersImageConfig;

DataAwsccSagemakerModelContainersImageConfig.builder()
    .build();
```


### DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig <a name="DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig;

DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig.builder()
    .build();
```


### DataAwsccSagemakerModelContainersModelDataSource <a name="DataAwsccSagemakerModelContainersModelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSource;

DataAwsccSagemakerModelContainersModelDataSource.builder()
    .build();
```


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSource <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource;

DataAwsccSagemakerModelContainersModelDataSourceS3DataSource.builder()
    .build();
```


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig;

DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.builder()
    .build();
```


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig;

DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.builder()
    .build();
```


### DataAwsccSagemakerModelContainersMultiModelConfig <a name="DataAwsccSagemakerModelContainersMultiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersMultiModelConfig;

DataAwsccSagemakerModelContainersMultiModelConfig.builder()
    .build();
```


### DataAwsccSagemakerModelInferenceExecutionConfig <a name="DataAwsccSagemakerModelInferenceExecutionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelInferenceExecutionConfig;

DataAwsccSagemakerModelInferenceExecutionConfig.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainer <a name="DataAwsccSagemakerModelPrimaryContainer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainer;

DataAwsccSagemakerModelPrimaryContainer.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerImageConfig <a name="DataAwsccSagemakerModelPrimaryContainerImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerImageConfig;

DataAwsccSagemakerModelPrimaryContainerImageConfig.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig;

DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSource <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSource;

DataAwsccSagemakerModelPrimaryContainerModelDataSource.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource;

DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig;

DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig;

DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.builder()
    .build();
```


### DataAwsccSagemakerModelPrimaryContainerMultiModelConfig <a name="DataAwsccSagemakerModelPrimaryContainerMultiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig;

DataAwsccSagemakerModelPrimaryContainerMultiModelConfig.builder()
    .build();
```


### DataAwsccSagemakerModelTags <a name="DataAwsccSagemakerModelTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelTags;

DataAwsccSagemakerModelTags.builder()
    .build();
```


### DataAwsccSagemakerModelVpcConfig <a name="DataAwsccSagemakerModelVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelVpcConfig;

DataAwsccSagemakerModelVpcConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelContainersImageConfigOutputReference <a name="DataAwsccSagemakerModelContainersImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersImageConfigOutputReference;

new DataAwsccSagemakerModelContainersImageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode">repositoryAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig">repositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig">DataAwsccSagemakerModelContainersImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryAccessMode`<sup>Required</sup> <a name="repositoryAccessMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode"></a>

```java
public java.lang.String getRepositoryAccessMode();
```

- *Type:* java.lang.String

---

##### `repositoryAuthConfig`<sup>Required</sup> <a name="repositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig"></a>

```java
public DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference getRepositoryAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersImageConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig">DataAwsccSagemakerModelContainersImageConfig</a>

---


### DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference <a name="DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference;

new DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">repositoryCredentialsProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryCredentialsProviderArn`<sup>Required</sup> <a name="repositoryCredentialsProviderArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```java
public java.lang.String getRepositoryCredentialsProviderArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig</a>

---


### DataAwsccSagemakerModelContainersList <a name="DataAwsccSagemakerModelContainersList" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersList;

new DataAwsccSagemakerModelContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.get"></a>

```java
public DataAwsccSagemakerModelContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerModelContainersModelDataSourceOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceOutputReference;

new DataAwsccSagemakerModelContainersModelDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource">DataAwsccSagemakerModelContainersModelDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3DataSource`<sup>Required</sup> <a name="s3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference getS3DataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource">DataAwsccSagemakerModelContainersModelDataSource</a>

---


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference;

new DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">hubContentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hubContentArn`<sup>Required</sup> <a name="hubContentArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```java
public java.lang.String getHubContentArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

---


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference;

new DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">acceptEula</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptEula`<sup>Required</sup> <a name="acceptEula" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```java
public IResolvable getAcceptEula();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

---


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference;

new DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">hubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">modelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType">s3DataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource">DataAwsccSagemakerModelContainersModelDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `hubAccessConfig`<sup>Required</sup> <a name="hubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference getHubAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `modelAccessConfig`<sup>Required</sup> <a name="modelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference getModelAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `s3DataType`<sup>Required</sup> <a name="s3DataType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```java
public java.lang.String getS3DataType();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceS3DataSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource">DataAwsccSagemakerModelContainersModelDataSourceS3DataSource</a>

---


### DataAwsccSagemakerModelContainersMultiModelConfigOutputReference <a name="DataAwsccSagemakerModelContainersMultiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference;

new DataAwsccSagemakerModelContainersMultiModelConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting">modelCacheSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig">DataAwsccSagemakerModelContainersMultiModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelCacheSetting`<sup>Required</sup> <a name="modelCacheSetting" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```java
public java.lang.String getModelCacheSetting();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainersMultiModelConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig">DataAwsccSagemakerModelContainersMultiModelConfig</a>

---


### DataAwsccSagemakerModelContainersOutputReference <a name="DataAwsccSagemakerModelContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelContainersOutputReference;

new DataAwsccSagemakerModelContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.containerHostname">containerHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.inferenceSpecificationName">inferenceSpecificationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataSource">modelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataUrl">modelDataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelPackageName">modelPackageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.multiModelConfig">multiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference">DataAwsccSagemakerModelContainersMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers">DataAwsccSagemakerModelContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.containerHostname"></a>

```java
public java.lang.String getContainerHostname();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.imageConfig"></a>

```java
public DataAwsccSagemakerModelContainersImageConfigOutputReference getImageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigOutputReference</a>

---

##### `inferenceSpecificationName`<sup>Required</sup> <a name="inferenceSpecificationName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.inferenceSpecificationName"></a>

```java
public java.lang.String getInferenceSpecificationName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `modelDataSource`<sup>Required</sup> <a name="modelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataSource"></a>

```java
public DataAwsccSagemakerModelContainersModelDataSourceOutputReference getModelDataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceOutputReference</a>

---

##### `modelDataUrl`<sup>Required</sup> <a name="modelDataUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataUrl"></a>

```java
public java.lang.String getModelDataUrl();
```

- *Type:* java.lang.String

---

##### `modelPackageName`<sup>Required</sup> <a name="modelPackageName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelPackageName"></a>

```java
public java.lang.String getModelPackageName();
```

- *Type:* java.lang.String

---

##### `multiModelConfig`<sup>Required</sup> <a name="multiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.multiModelConfig"></a>

```java
public DataAwsccSagemakerModelContainersMultiModelConfigOutputReference getMultiModelConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference">DataAwsccSagemakerModelContainersMultiModelConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelContainers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers">DataAwsccSagemakerModelContainers</a>

---


### DataAwsccSagemakerModelInferenceExecutionConfigOutputReference <a name="DataAwsccSagemakerModelInferenceExecutionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference;

new DataAwsccSagemakerModelInferenceExecutionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig">DataAwsccSagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelInferenceExecutionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig">DataAwsccSagemakerModelInferenceExecutionConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference;

new DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">repositoryAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">repositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig">DataAwsccSagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryAccessMode`<sup>Required</sup> <a name="repositoryAccessMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```java
public java.lang.String getRepositoryAccessMode();
```

- *Type:* java.lang.String

---

##### `repositoryAuthConfig`<sup>Required</sup> <a name="repositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference getRepositoryAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerImageConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig">DataAwsccSagemakerModelPrimaryContainerImageConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference;

new DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">repositoryCredentialsProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryCredentialsProviderArn`<sup>Required</sup> <a name="repositoryCredentialsProviderArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```java
public java.lang.String getRepositoryCredentialsProviderArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference;

new DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3DataSource`<sup>Required</sup> <a name="s3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference getS3DataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSource</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference;

new DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">hubContentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hubContentArn`<sup>Required</sup> <a name="hubContentArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```java
public java.lang.String getHubContentArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference;

new DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">acceptEula</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptEula`<sup>Required</sup> <a name="acceptEula" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```java
public IResolvable getAcceptEula();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference;

new DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">hubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">modelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">s3DataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `hubAccessConfig`<sup>Required</sup> <a name="hubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference getHubAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `modelAccessConfig`<sup>Required</sup> <a name="modelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference getModelAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `s3DataType`<sup>Required</sup> <a name="s3DataType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```java
public java.lang.String getS3DataType();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

---


### DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference;

new DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting">modelCacheSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig">DataAwsccSagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelCacheSetting`<sup>Required</sup> <a name="modelCacheSetting" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```java
public java.lang.String getModelCacheSetting();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerMultiModelConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig">DataAwsccSagemakerModelPrimaryContainerMultiModelConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelPrimaryContainerOutputReference;

new DataAwsccSagemakerModelPrimaryContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.containerHostname">containerHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName">inferenceSpecificationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataSource">modelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">modelDataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelPackageName">modelPackageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.multiModelConfig">multiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer">DataAwsccSagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```java
public java.lang.String getContainerHostname();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference getImageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `inferenceSpecificationName`<sup>Required</sup> <a name="inferenceSpecificationName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName"></a>

```java
public java.lang.String getInferenceSpecificationName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `modelDataSource`<sup>Required</sup> <a name="modelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataSource"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference getModelDataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference</a>

---

##### `modelDataUrl`<sup>Required</sup> <a name="modelDataUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```java
public java.lang.String getModelDataUrl();
```

- *Type:* java.lang.String

---

##### `modelPackageName`<sup>Required</sup> <a name="modelPackageName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelPackageName"></a>

```java
public java.lang.String getModelPackageName();
```

- *Type:* java.lang.String

---

##### `multiModelConfig`<sup>Required</sup> <a name="multiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.multiModelConfig"></a>

```java
public DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference getMultiModelConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelPrimaryContainer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer">DataAwsccSagemakerModelPrimaryContainer</a>

---


### DataAwsccSagemakerModelTagsList <a name="DataAwsccSagemakerModelTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelTagsList;

new DataAwsccSagemakerModelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.get"></a>

```java
public DataAwsccSagemakerModelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerModelTagsOutputReference <a name="DataAwsccSagemakerModelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelTagsOutputReference;

new DataAwsccSagemakerModelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags">DataAwsccSagemakerModelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags">DataAwsccSagemakerModelTags</a>

---


### DataAwsccSagemakerModelVpcConfigOutputReference <a name="DataAwsccSagemakerModelVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_model.DataAwsccSagemakerModelVpcConfigOutputReference;

new DataAwsccSagemakerModelVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig">DataAwsccSagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerModelVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig">DataAwsccSagemakerModelVpcConfig</a>

---



