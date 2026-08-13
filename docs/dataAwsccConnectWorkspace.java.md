# `dataAwsccConnectWorkspace` Submodule <a name="`dataAwsccConnectWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectWorkspace <a name="DataAwsccConnectWorkspace" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspace;

DataAwsccConnectWorkspace.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace#id DataAwsccConnectWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspace;

DataAwsccConnectWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspace;

DataAwsccConnectWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspace;

DataAwsccConnectWorkspace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspace;

DataAwsccConnectWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccConnectWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccConnectWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.associations">associations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.media">media</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList">DataAwsccConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.pages">pages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList">DataAwsccConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList">DataAwsccConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference">DataAwsccConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.associations"></a>

```java
public java.util.List<java.lang.String> getAssociations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `media`<sup>Required</sup> <a name="media" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.media"></a>

```java
public DataAwsccConnectWorkspaceMediaList getMedia();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList">DataAwsccConnectWorkspaceMediaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.pages"></a>

```java
public DataAwsccConnectWorkspacePagesList getPages();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList">DataAwsccConnectWorkspacePagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tags"></a>

```java
public DataAwsccConnectWorkspaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList">DataAwsccConnectWorkspaceTagsList</a>

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.theme"></a>

```java
public DataAwsccConnectWorkspaceThemeOutputReference getTheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference">DataAwsccConnectWorkspaceThemeOutputReference</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectWorkspaceConfig <a name="DataAwsccConnectWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceConfig;

DataAwsccConnectWorkspaceConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace#id DataAwsccConnectWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectWorkspaceMedia <a name="DataAwsccConnectWorkspaceMedia" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceMedia;

DataAwsccConnectWorkspaceMedia.builder()
    .build();
```


### DataAwsccConnectWorkspacePages <a name="DataAwsccConnectWorkspacePages" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspacePages;

DataAwsccConnectWorkspacePages.builder()
    .build();
```


### DataAwsccConnectWorkspaceTags <a name="DataAwsccConnectWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceTags;

DataAwsccConnectWorkspaceTags.builder()
    .build();
```


### DataAwsccConnectWorkspaceTheme <a name="DataAwsccConnectWorkspaceTheme" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceTheme;

DataAwsccConnectWorkspaceTheme.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDark <a name="DataAwsccConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDark;

DataAwsccConnectWorkspaceThemeDark.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkPalette <a name="DataAwsccConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPalette;

DataAwsccConnectWorkspaceThemeDarkPalette.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkPaletteCanvas <a name="DataAwsccConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas;

DataAwsccConnectWorkspaceThemeDarkPaletteCanvas.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkPaletteHeader <a name="DataAwsccConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader;

DataAwsccConnectWorkspaceThemeDarkPaletteHeader.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkPaletteNavigation <a name="DataAwsccConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation;

DataAwsccConnectWorkspaceThemeDarkPaletteNavigation.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkPalettePrimary <a name="DataAwsccConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary;

DataAwsccConnectWorkspaceThemeDarkPalettePrimary.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkTypography <a name="DataAwsccConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkTypography;

DataAwsccConnectWorkspaceThemeDarkTypography.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily <a name="DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily;

DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLight <a name="DataAwsccConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLight;

DataAwsccConnectWorkspaceThemeLight.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightPalette <a name="DataAwsccConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPalette;

DataAwsccConnectWorkspaceThemeLightPalette.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightPaletteCanvas <a name="DataAwsccConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas;

DataAwsccConnectWorkspaceThemeLightPaletteCanvas.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightPaletteHeader <a name="DataAwsccConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader;

DataAwsccConnectWorkspaceThemeLightPaletteHeader.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightPaletteNavigation <a name="DataAwsccConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation;

DataAwsccConnectWorkspaceThemeLightPaletteNavigation.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightPalettePrimary <a name="DataAwsccConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary;

DataAwsccConnectWorkspaceThemeLightPalettePrimary.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightTypography <a name="DataAwsccConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightTypography;

DataAwsccConnectWorkspaceThemeLightTypography.builder()
    .build();
```


### DataAwsccConnectWorkspaceThemeLightTypographyFontFamily <a name="DataAwsccConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily;

DataAwsccConnectWorkspaceThemeLightTypographyFontFamily.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectWorkspaceMediaList <a name="DataAwsccConnectWorkspaceMediaList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceMediaList;

new DataAwsccConnectWorkspaceMediaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get"></a>

```java
public DataAwsccConnectWorkspaceMediaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectWorkspaceMediaOutputReference <a name="DataAwsccConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceMediaOutputReference;

new DataAwsccConnectWorkspaceMediaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia">DataAwsccConnectWorkspaceMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceMedia getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia">DataAwsccConnectWorkspaceMedia</a>

---


### DataAwsccConnectWorkspacePagesList <a name="DataAwsccConnectWorkspacePagesList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspacePagesList;

new DataAwsccConnectWorkspacePagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get"></a>

```java
public DataAwsccConnectWorkspacePagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectWorkspacePagesOutputReference <a name="DataAwsccConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspacePagesOutputReference;

new DataAwsccConnectWorkspacePagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.inputData">inputData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.page">page</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.slug">slug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages">DataAwsccConnectWorkspacePages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputData`<sup>Required</sup> <a name="inputData" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.inputData"></a>

```java
public java.lang.String getInputData();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.slug"></a>

```java
public java.lang.String getSlug();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspacePages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages">DataAwsccConnectWorkspacePages</a>

---


### DataAwsccConnectWorkspaceTagsList <a name="DataAwsccConnectWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceTagsList;

new DataAwsccConnectWorkspaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get"></a>

```java
public DataAwsccConnectWorkspaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccConnectWorkspaceTagsOutputReference <a name="DataAwsccConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceTagsOutputReference;

new DataAwsccConnectWorkspaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags">DataAwsccConnectWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags">DataAwsccConnectWorkspaceTags</a>

---


### DataAwsccConnectWorkspaceThemeDarkOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkOutputReference;

new DataAwsccConnectWorkspaceThemeDarkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark">DataAwsccConnectWorkspaceThemeDark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference getPalette();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference getTypography();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDark getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark">DataAwsccConnectWorkspaceThemeDark</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference;

new DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">activeBackground</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">containerBackground</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">pageBackground</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas">DataAwsccConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeBackground`<sup>Required</sup> <a name="activeBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```java
public java.lang.String getActiveBackground();
```

- *Type:* java.lang.String

---

##### `containerBackground`<sup>Required</sup> <a name="containerBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```java
public java.lang.String getContainerBackground();
```

- *Type:* java.lang.String

---

##### `pageBackground`<sup>Required</sup> <a name="pageBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```java
public java.lang.String getPageBackground();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteCanvas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas">DataAwsccConnectWorkspaceThemeDarkPaletteCanvas</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference;

new DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">background</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">textHover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader">DataAwsccConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```java
public java.lang.String getBackground();
```

- *Type:* java.lang.String

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```java
public IResolvable getInvertActionsColors();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```java
public java.lang.String getTextHover();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader">DataAwsccConnectWorkspaceThemeDarkPaletteHeader</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference;

new DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">background</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">textActive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">textBackgroundActive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">textBackgroundHover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">textHover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation">DataAwsccConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```java
public java.lang.String getBackground();
```

- *Type:* java.lang.String

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```java
public IResolvable getInvertActionsColors();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `textActive`<sup>Required</sup> <a name="textActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```java
public java.lang.String getTextActive();
```

- *Type:* java.lang.String

---

##### `textBackgroundActive`<sup>Required</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```java
public java.lang.String getTextBackgroundActive();
```

- *Type:* java.lang.String

---

##### `textBackgroundHover`<sup>Required</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```java
public java.lang.String getTextBackgroundHover();
```

- *Type:* java.lang.String

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```java
public java.lang.String getTextHover();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteNavigation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation">DataAwsccConnectWorkspaceThemeDarkPaletteNavigation</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference;

new DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette">DataAwsccConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference getCanvas();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference getNavigation();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference getPrimary();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPalette getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette">DataAwsccConnectWorkspaceThemeDarkPalette</a>

---


### DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference;

new DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">active</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">contrastText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary">DataAwsccConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```java
public java.lang.String getActive();
```

- *Type:* java.lang.String

---

##### `contrastText`<sup>Required</sup> <a name="contrastText" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```java
public java.lang.String getContrastText();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkPalettePrimary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary">DataAwsccConnectWorkspaceThemeDarkPalettePrimary</a>

---


### DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference;

new DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily</a>

---


### DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference;

new DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography">DataAwsccConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference getFontFamily();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkTypography getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography">DataAwsccConnectWorkspaceThemeDarkTypography</a>

---


### DataAwsccConnectWorkspaceThemeLightOutputReference <a name="DataAwsccConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightOutputReference;

new DataAwsccConnectWorkspaceThemeLightOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight">DataAwsccConnectWorkspaceThemeLight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteOutputReference getPalette();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```java
public DataAwsccConnectWorkspaceThemeLightTypographyOutputReference getTypography();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLight getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight">DataAwsccConnectWorkspaceThemeLight</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference;

new DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">activeBackground</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">containerBackground</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">pageBackground</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas">DataAwsccConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeBackground`<sup>Required</sup> <a name="activeBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```java
public java.lang.String getActiveBackground();
```

- *Type:* java.lang.String

---

##### `containerBackground`<sup>Required</sup> <a name="containerBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```java
public java.lang.String getContainerBackground();
```

- *Type:* java.lang.String

---

##### `pageBackground`<sup>Required</sup> <a name="pageBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```java
public java.lang.String getPageBackground();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteCanvas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas">DataAwsccConnectWorkspaceThemeLightPaletteCanvas</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference;

new DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">background</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">textHover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader">DataAwsccConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```java
public java.lang.String getBackground();
```

- *Type:* java.lang.String

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```java
public IResolvable getInvertActionsColors();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```java
public java.lang.String getTextHover();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader">DataAwsccConnectWorkspaceThemeLightPaletteHeader</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference;

new DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">background</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">invertActionsColors</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">textActive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">textBackgroundActive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">textBackgroundHover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">textHover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation">DataAwsccConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```java
public java.lang.String getBackground();
```

- *Type:* java.lang.String

---

##### `invertActionsColors`<sup>Required</sup> <a name="invertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```java
public IResolvable getInvertActionsColors();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `textActive`<sup>Required</sup> <a name="textActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```java
public java.lang.String getTextActive();
```

- *Type:* java.lang.String

---

##### `textBackgroundActive`<sup>Required</sup> <a name="textBackgroundActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```java
public java.lang.String getTextBackgroundActive();
```

- *Type:* java.lang.String

---

##### `textBackgroundHover`<sup>Required</sup> <a name="textBackgroundHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```java
public java.lang.String getTextBackgroundHover();
```

- *Type:* java.lang.String

---

##### `textHover`<sup>Required</sup> <a name="textHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```java
public java.lang.String getTextHover();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteNavigation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation">DataAwsccConnectWorkspaceThemeLightPaletteNavigation</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference;

new DataAwsccConnectWorkspaceThemeLightPaletteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette">DataAwsccConnectWorkspaceThemeLightPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference getCanvas();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference getNavigation();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference getPrimary();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPalette getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette">DataAwsccConnectWorkspaceThemeLightPalette</a>

---


### DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference;

new DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">active</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">contrastText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary">DataAwsccConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```java
public java.lang.String getActive();
```

- *Type:* java.lang.String

---

##### `contrastText`<sup>Required</sup> <a name="contrastText" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```java
public java.lang.String getContrastText();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightPalettePrimary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary">DataAwsccConnectWorkspaceThemeLightPalettePrimary</a>

---


### DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference;

new DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily">DataAwsccConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightTypographyFontFamily getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily">DataAwsccConnectWorkspaceThemeLightTypographyFontFamily</a>

---


### DataAwsccConnectWorkspaceThemeLightTypographyOutputReference <a name="DataAwsccConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference;

new DataAwsccConnectWorkspaceThemeLightTypographyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">fontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography">DataAwsccConnectWorkspaceThemeLightTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```java
public DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference getFontFamily();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceThemeLightTypography getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography">DataAwsccConnectWorkspaceThemeLightTypography</a>

---


### DataAwsccConnectWorkspaceThemeOutputReference <a name="DataAwsccConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_connect_workspace.DataAwsccConnectWorkspaceThemeOutputReference;

new DataAwsccConnectWorkspaceThemeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.dark">dark</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference">DataAwsccConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.light">light</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference">DataAwsccConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme">DataAwsccConnectWorkspaceTheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dark`<sup>Required</sup> <a name="dark" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.dark"></a>

```java
public DataAwsccConnectWorkspaceThemeDarkOutputReference getDark();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference">DataAwsccConnectWorkspaceThemeDarkOutputReference</a>

---

##### `light`<sup>Required</sup> <a name="light" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.light"></a>

```java
public DataAwsccConnectWorkspaceThemeLightOutputReference getLight();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference">DataAwsccConnectWorkspaceThemeLightOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```java
public DataAwsccConnectWorkspaceTheme getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme">DataAwsccConnectWorkspaceTheme</a>

---



