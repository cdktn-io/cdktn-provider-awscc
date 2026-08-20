# `dataAwsccMskChannel` Submodule <a name="`dataAwsccMskChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccMskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMskChannel <a name="DataAwsccMskChannel" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/msk_channel awscc_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannel;

DataAwsccMskChannel.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/msk_channel#id DataAwsccMskChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannel;

DataAwsccMskChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannel;

DataAwsccMskChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannel;

DataAwsccMskChannel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannel;

DataAwsccMskChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccMskChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccMskChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccMskChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccMskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference">DataAwsccMskChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.icebergDestinationConfiguration">icebergDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference">DataAwsccMskChannelLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference">DataAwsccMskChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.stateInfo">stateInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference">DataAwsccMskChannelStateInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.topicConfigurationList">topicConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList">DataAwsccMskChannelTopicConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.encryptionConfiguration"></a>

```java
public DataAwsccMskChannelEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference">DataAwsccMskChannelEncryptionConfigurationOutputReference</a>

---

##### `icebergDestinationConfiguration`<sup>Required</sup> <a name="icebergDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.icebergDestinationConfiguration"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationOutputReference getIcebergDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationOutputReference</a>

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.loggingInfo"></a>

```java
public DataAwsccMskChannelLoggingInfoOutputReference getLoggingInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference">DataAwsccMskChannelLoggingInfoOutputReference</a>

---

##### `s3DestinationConfiguration`<sup>Required</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.s3DestinationConfiguration"></a>

```java
public DataAwsccMskChannelS3DestinationConfigurationOutputReference getS3DestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference">DataAwsccMskChannelS3DestinationConfigurationOutputReference</a>

---

##### `stateInfo`<sup>Required</sup> <a name="stateInfo" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.stateInfo"></a>

```java
public DataAwsccMskChannelStateInfoOutputReference getStateInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference">DataAwsccMskChannelStateInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `topicConfigurationList`<sup>Required</sup> <a name="topicConfigurationList" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.topicConfigurationList"></a>

```java
public DataAwsccMskChannelTopicConfigurationListStructList getTopicConfigurationList();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList">DataAwsccMskChannelTopicConfigurationListStructList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMskChannelConfig <a name="DataAwsccMskChannelConfig" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelConfig;

DataAwsccMskChannelConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/msk_channel#id DataAwsccMskChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMskChannelEncryptionConfiguration <a name="DataAwsccMskChannelEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelEncryptionConfiguration;

DataAwsccMskChannelEncryptionConfiguration.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfiguration <a name="DataAwsccMskChannelIcebergDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfiguration;

DataAwsccMskChannelIcebergDestinationConfiguration.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationCatalog <a name="DataAwsccMskChannelIcebergDestinationConfigurationCatalog" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalog.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationCatalog;

DataAwsccMskChannelIcebergDestinationConfigurationCatalog.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3 <a name="DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3;

DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec;

DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct;

DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct;

DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution <a name="DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution;

DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution.builder()
    .build();
```


### DataAwsccMskChannelIcebergDestinationConfigurationTableCreation <a name="DataAwsccMskChannelIcebergDestinationConfigurationTableCreation" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreation.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreation;

DataAwsccMskChannelIcebergDestinationConfigurationTableCreation.builder()
    .build();
```


### DataAwsccMskChannelLoggingInfo <a name="DataAwsccMskChannelLoggingInfo" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfo;

DataAwsccMskChannelLoggingInfo.builder()
    .build();
```


### DataAwsccMskChannelLoggingInfoCloudwatchLogs <a name="DataAwsccMskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoCloudwatchLogs;

DataAwsccMskChannelLoggingInfoCloudwatchLogs.builder()
    .build();
```


### DataAwsccMskChannelLoggingInfoFirehose <a name="DataAwsccMskChannelLoggingInfoFirehose" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehose.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoFirehose;

DataAwsccMskChannelLoggingInfoFirehose.builder()
    .build();
```


### DataAwsccMskChannelLoggingInfoS3 <a name="DataAwsccMskChannelLoggingInfoS3" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoS3;

DataAwsccMskChannelLoggingInfoS3.builder()
    .build();
```


### DataAwsccMskChannelS3DestinationConfiguration <a name="DataAwsccMskChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelS3DestinationConfiguration;

DataAwsccMskChannelS3DestinationConfiguration.builder()
    .build();
```


### DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3 <a name="DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3;

DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3.builder()
    .build();
```


### DataAwsccMskChannelS3DestinationConfigurationStorage <a name="DataAwsccMskChannelS3DestinationConfigurationStorage" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelS3DestinationConfigurationStorage;

DataAwsccMskChannelS3DestinationConfigurationStorage.builder()
    .build();
```


### DataAwsccMskChannelStateInfo <a name="DataAwsccMskChannelStateInfo" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelStateInfo;

DataAwsccMskChannelStateInfo.builder()
    .build();
```


### DataAwsccMskChannelTopicConfigurationListRecordConverter <a name="DataAwsccMskChannelTopicConfigurationListRecordConverter" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverter.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListRecordConverter;

DataAwsccMskChannelTopicConfigurationListRecordConverter.builder()
    .build();
```


### DataAwsccMskChannelTopicConfigurationListRecordSchema <a name="DataAwsccMskChannelTopicConfigurationListRecordSchema" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListRecordSchema;

DataAwsccMskChannelTopicConfigurationListRecordSchema.builder()
    .build();
```


### DataAwsccMskChannelTopicConfigurationListStruct <a name="DataAwsccMskChannelTopicConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListStruct;

DataAwsccMskChannelTopicConfigurationListStruct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMskChannelEncryptionConfigurationOutputReference <a name="DataAwsccMskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelEncryptionConfigurationOutputReference;

new DataAwsccMskChannelEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfiguration">DataAwsccMskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelEncryptionConfiguration">DataAwsccMskChannelEncryptionConfiguration</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn">catalogArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation">warehouseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalog">DataAwsccMskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn"></a>

```java
public java.lang.String getCatalogArn();
```

- *Type:* java.lang.String

---

##### `warehouseLocation`<sup>Required</sup> <a name="warehouseLocation" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation"></a>

```java
public java.lang.String getWarehouseLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalog">DataAwsccMskChannelIcebergDestinationConfigurationCatalog</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3">DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3">DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy">partitionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList">sourceList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionStrategy`<sup>Required</sup> <a name="partitionStrategy" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy"></a>

```java
public java.lang.String getPartitionStrategy();
```

- *Type:* java.lang.String

---

##### `sourceList`<sup>Required</sup> <a name="sourceList" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList getSourceList();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList;

new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList;

new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.get"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName">destinationDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName">destinationTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationDatabaseName`<sup>Required</sup> <a name="destinationDatabaseName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName"></a>

```java
public java.lang.String getDestinationDatabaseName();
```

- *Type:* java.lang.String

---

##### `destinationTableName`<sup>Required</sup> <a name="destinationTableName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName"></a>

```java
public java.lang.String getDestinationTableName();
```

- *Type:* java.lang.String

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly">appendOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList">destinationTableList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution">schemaEvolution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation">tableCreation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfiguration">DataAwsccMskChannelIcebergDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appendOnly`<sup>Required</sup> <a name="appendOnly" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly"></a>

```java
public IResolvable getAppendOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.catalog"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference getCatalog();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference</a>

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

---

##### `deadLetterQueueS3`<sup>Required</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference getDeadLetterQueueS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `destinationTableList`<sup>Required</sup> <a name="destinationTableList" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList getDestinationTableList();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList">DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList</a>

---

##### `schemaEvolution`<sup>Required</sup> <a name="schemaEvolution" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference getSchemaEvolution();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a>

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `tableCreation`<sup>Required</sup> <a name="tableCreation" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference getTableCreation();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference">DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfiguration">DataAwsccMskChannelIcebergDestinationConfiguration</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution">enableSchemaEvolution</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution">DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableSchemaEvolution`<sup>Required</sup> <a name="enableSchemaEvolution" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```java
public IResolvable getEnableSchemaEvolution();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution">DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---


### DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference <a name="DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference;

new DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation">enableTableCreation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreation">DataAwsccMskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableTableCreation`<sup>Required</sup> <a name="enableTableCreation" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation"></a>

```java
public IResolvable getEnableTableCreation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelIcebergDestinationConfigurationTableCreation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelIcebergDestinationConfigurationTableCreation">DataAwsccMskChannelIcebergDestinationConfigurationTableCreation</a>

---


### DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference <a name="DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference;

new DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogs">DataAwsccMskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelLoggingInfoCloudwatchLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogs">DataAwsccMskChannelLoggingInfoCloudwatchLogs</a>

---


### DataAwsccMskChannelLoggingInfoFirehoseOutputReference <a name="DataAwsccMskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference;

new DataAwsccMskChannelLoggingInfoFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehose">DataAwsccMskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelLoggingInfoFirehose getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehose">DataAwsccMskChannelLoggingInfoFirehose</a>

---


### DataAwsccMskChannelLoggingInfoOutputReference <a name="DataAwsccMskChannelLoggingInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoOutputReference;

new DataAwsccMskChannelLoggingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference">DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference">DataAwsccMskChannelLoggingInfoFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference">DataAwsccMskChannelLoggingInfoS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfo">DataAwsccMskChannelLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```java
public DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference">DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.firehose"></a>

```java
public DataAwsccMskChannelLoggingInfoFirehoseOutputReference getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoFirehoseOutputReference">DataAwsccMskChannelLoggingInfoFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.s3"></a>

```java
public DataAwsccMskChannelLoggingInfoS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference">DataAwsccMskChannelLoggingInfoS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelLoggingInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfo">DataAwsccMskChannelLoggingInfo</a>

---


### DataAwsccMskChannelLoggingInfoS3OutputReference <a name="DataAwsccMskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelLoggingInfoS3OutputReference;

new DataAwsccMskChannelLoggingInfoS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3">DataAwsccMskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelLoggingInfoS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelLoggingInfoS3">DataAwsccMskChannelLoggingInfoS3</a>

---


### DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference <a name="DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference;

new DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3">DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3">DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---


### DataAwsccMskChannelS3DestinationConfigurationOutputReference <a name="DataAwsccMskChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelS3DestinationConfigurationOutputReference;

new DataAwsccMskChannelS3DestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference">DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfiguration">DataAwsccMskChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

---

##### `deadLetterQueueS3`<sup>Required</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```java
public DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference getDeadLetterQueueS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.storage"></a>

```java
public DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference">DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelS3DestinationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfiguration">DataAwsccMskChannelS3DestinationConfiguration</a>

---


### DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference <a name="DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference;

new DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix">outputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorage">DataAwsccMskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `outputKeyTemplate`<sup>Required</sup> <a name="outputKeyTemplate" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate"></a>

```java
public java.lang.String getOutputKeyTemplate();
```

- *Type:* java.lang.String

---

##### `outputPrefix`<sup>Required</sup> <a name="outputPrefix" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix"></a>

```java
public java.lang.String getOutputPrefix();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelS3DestinationConfigurationStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelS3DestinationConfigurationStorage">DataAwsccMskChannelS3DestinationConfigurationStorage</a>

---


### DataAwsccMskChannelStateInfoOutputReference <a name="DataAwsccMskChannelStateInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelStateInfoOutputReference;

new DataAwsccMskChannelStateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfo">DataAwsccMskChannelStateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelStateInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelStateInfo">DataAwsccMskChannelStateInfo</a>

---


### DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference <a name="DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference;

new DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter">valueConverter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverter">DataAwsccMskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueConverter`<sup>Required</sup> <a name="valueConverter" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter"></a>

```java
public java.lang.String getValueConverter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelTopicConfigurationListRecordConverter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverter">DataAwsccMskChannelTopicConfigurationListRecordConverter</a>

---


### DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference <a name="DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference;

new DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn">gsrArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchema">DataAwsccMskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gsrArn`<sup>Required</sup> <a name="gsrArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn"></a>

```java
public java.lang.String getGsrArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelTopicConfigurationListRecordSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchema">DataAwsccMskChannelTopicConfigurationListRecordSchema</a>

---


### DataAwsccMskChannelTopicConfigurationListStructList <a name="DataAwsccMskChannelTopicConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListStructList;

new DataAwsccMskChannelTopicConfigurationListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.get"></a>

```java
public DataAwsccMskChannelTopicConfigurationListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccMskChannelTopicConfigurationListStructOutputReference <a name="DataAwsccMskChannelTopicConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_msk_channel.DataAwsccMskChannelTopicConfigurationListStructOutputReference;

new DataAwsccMskChannelTopicConfigurationListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.recordConverter">recordConverter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference">DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.recordSchema">recordSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference">DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStruct">DataAwsccMskChannelTopicConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordConverter`<sup>Required</sup> <a name="recordConverter" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.recordConverter"></a>

```java
public DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference getRecordConverter();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference">DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference</a>

---

##### `recordSchema`<sup>Required</sup> <a name="recordSchema" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.recordSchema"></a>

```java
public DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference getRecordSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference">DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference</a>

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStructOutputReference.property.internalValue"></a>

```java
public DataAwsccMskChannelTopicConfigurationListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMskChannel.DataAwsccMskChannelTopicConfigurationListStruct">DataAwsccMskChannelTopicConfigurationListStruct</a>

---



