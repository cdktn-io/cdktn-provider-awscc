# `dataAwsccGameliftScript` Submodule <a name="`dataAwsccGameliftScript` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftScript <a name="DataAwsccGameliftScript" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_script awscc_gamelift_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScript;

DataAwsccGameliftScript.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_script#id DataAwsccGameliftScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftScript resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScript;

DataAwsccGameliftScript.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScript;

DataAwsccGameliftScript.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScript;

DataAwsccGameliftScript.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScript;

DataAwsccGameliftScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccGameliftScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccGameliftScript resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccGameliftScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccGameliftScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.nodeJsVersion">nodeJsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.sizeOnDisk">sizeOnDisk</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference">DataAwsccGameliftScriptStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList">DataAwsccGameliftScriptTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeJsVersion`<sup>Required</sup> <a name="nodeJsVersion" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.nodeJsVersion"></a>

```java
public java.lang.String getNodeJsVersion();
```

- *Type:* java.lang.String

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

---

##### `sizeOnDisk`<sup>Required</sup> <a name="sizeOnDisk" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.sizeOnDisk"></a>

```java
public java.lang.Number getSizeOnDisk();
```

- *Type:* java.lang.Number

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.storageLocation"></a>

```java
public DataAwsccGameliftScriptStorageLocationOutputReference getStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference">DataAwsccGameliftScriptStorageLocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.tags"></a>

```java
public DataAwsccGameliftScriptTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList">DataAwsccGameliftScriptTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScript.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftScriptConfig <a name="DataAwsccGameliftScriptConfig" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScriptConfig;

DataAwsccGameliftScriptConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_script#id DataAwsccGameliftScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftScriptStorageLocation <a name="DataAwsccGameliftScriptStorageLocation" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScriptStorageLocation;

DataAwsccGameliftScriptStorageLocation.builder()
    .build();
```


### DataAwsccGameliftScriptTags <a name="DataAwsccGameliftScriptTags" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScriptTags;

DataAwsccGameliftScriptTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftScriptStorageLocationOutputReference <a name="DataAwsccGameliftScriptStorageLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScriptStorageLocationOutputReference;

new DataAwsccGameliftScriptStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocation">DataAwsccGameliftScriptStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocationOutputReference.property.internalValue"></a>

```java
public DataAwsccGameliftScriptStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptStorageLocation">DataAwsccGameliftScriptStorageLocation</a>

---


### DataAwsccGameliftScriptTagsList <a name="DataAwsccGameliftScriptTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScriptTagsList;

new DataAwsccGameliftScriptTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.get"></a>

```java
public DataAwsccGameliftScriptTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccGameliftScriptTagsOutputReference <a name="DataAwsccGameliftScriptTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_gamelift_script.DataAwsccGameliftScriptTagsOutputReference;

new DataAwsccGameliftScriptTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTags">DataAwsccGameliftScriptTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccGameliftScriptTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftScript.DataAwsccGameliftScriptTags">DataAwsccGameliftScriptTags</a>

---



