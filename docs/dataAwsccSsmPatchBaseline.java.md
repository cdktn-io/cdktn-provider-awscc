# `dataAwsccSsmPatchBaseline` Submodule <a name="`dataAwsccSsmPatchBaseline` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmPatchBaseline <a name="DataAwsccSsmPatchBaseline" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_patch_baseline awscc_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaseline;

DataAwsccSsmPatchBaseline.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_patch_baseline#id DataAwsccSsmPatchBaseline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaseline;

DataAwsccSsmPatchBaseline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaseline;

DataAwsccSsmPatchBaseline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaseline;

DataAwsccSsmPatchBaseline.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaseline;

DataAwsccSsmPatchBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSsmPatchBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSsmPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSsmPatchBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference">DataAwsccSsmPatchBaselineApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus">availableSecurityUpdatesComplianceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.defaultBaseline">defaultBaseline</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.globalFilters">globalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference">DataAwsccSsmPatchBaselineGlobalFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.patchBaselineId">patchBaselineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.patchGroups">patchGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList">DataAwsccSsmPatchBaselineSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList">DataAwsccSsmPatchBaselineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvalRules"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesOutputReference getApprovalRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference">DataAwsccSsmPatchBaselineApprovalRulesOutputReference</a>

---

##### `approvedPatches`<sup>Required</sup> <a name="approvedPatches" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvedPatches"></a>

```java
public java.util.List<java.lang.String> getApprovedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="approvedPatchesComplianceLevel" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevel();
```

- *Type:* java.lang.String

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```java
public IResolvable getApprovedPatchesEnableNonSecurity();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `availableSecurityUpdatesComplianceStatus`<sup>Required</sup> <a name="availableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus"></a>

```java
public java.lang.String getAvailableSecurityUpdatesComplianceStatus();
```

- *Type:* java.lang.String

---

##### `defaultBaseline`<sup>Required</sup> <a name="defaultBaseline" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.defaultBaseline"></a>

```java
public IResolvable getDefaultBaseline();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalFilters`<sup>Required</sup> <a name="globalFilters" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.globalFilters"></a>

```java
public DataAwsccSsmPatchBaselineGlobalFiltersOutputReference getGlobalFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference">DataAwsccSsmPatchBaselineGlobalFiltersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `patchBaselineId`<sup>Required</sup> <a name="patchBaselineId" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.patchBaselineId"></a>

```java
public java.lang.String getPatchBaselineId();
```

- *Type:* java.lang.String

---

##### `patchGroups`<sup>Required</sup> <a name="patchGroups" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.patchGroups"></a>

```java
public java.util.List<java.lang.String> getPatchGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejectedPatches`<sup>Required</sup> <a name="rejectedPatches" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.rejectedPatches"></a>

```java
public java.util.List<java.lang.String> getRejectedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="rejectedPatchesAction" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.rejectedPatchesAction"></a>

```java
public java.lang.String getRejectedPatchesAction();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.sources"></a>

```java
public DataAwsccSsmPatchBaselineSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList">DataAwsccSsmPatchBaselineSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.tags"></a>

```java
public DataAwsccSsmPatchBaselineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList">DataAwsccSsmPatchBaselineTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaseline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmPatchBaselineApprovalRules <a name="DataAwsccSsmPatchBaselineApprovalRules" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRules;

DataAwsccSsmPatchBaselineApprovalRules.builder()
    .build();
```


### DataAwsccSsmPatchBaselineApprovalRulesPatchRules <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRules" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRules;

DataAwsccSsmPatchBaselineApprovalRulesPatchRules.builder()
    .build();
```


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup;

DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.builder()
    .build();
```


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters;

DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.builder()
    .build();
```


### DataAwsccSsmPatchBaselineConfig <a name="DataAwsccSsmPatchBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineConfig;

DataAwsccSsmPatchBaselineConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_patch_baseline#id DataAwsccSsmPatchBaseline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmPatchBaselineGlobalFilters <a name="DataAwsccSsmPatchBaselineGlobalFilters" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineGlobalFilters;

DataAwsccSsmPatchBaselineGlobalFilters.builder()
    .build();
```


### DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters <a name="DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters;

DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters.builder()
    .build();
```


### DataAwsccSsmPatchBaselineSources <a name="DataAwsccSsmPatchBaselineSources" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineSources;

DataAwsccSsmPatchBaselineSources.builder()
    .build();
```


### DataAwsccSsmPatchBaselineTags <a name="DataAwsccSsmPatchBaselineTags" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineTags;

DataAwsccSsmPatchBaselineTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmPatchBaselineApprovalRulesOutputReference <a name="DataAwsccSsmPatchBaselineApprovalRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference;

new DataAwsccSsmPatchBaselineApprovalRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.patchRules">patchRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRules">DataAwsccSsmPatchBaselineApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchRules`<sup>Required</sup> <a name="patchRules" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.patchRules"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList getPatchRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRules">DataAwsccSsmPatchBaselineApprovalRules</a>

---


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList;

new DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.get"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference;

new DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays">approveAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate">approveUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel">complianceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity">enableNonSecurity</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup">patchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRules">DataAwsccSsmPatchBaselineApprovalRulesPatchRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approveAfterDays`<sup>Required</sup> <a name="approveAfterDays" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays"></a>

```java
public java.lang.Number getApproveAfterDays();
```

- *Type:* java.lang.Number

---

##### `approveUntilDate`<sup>Required</sup> <a name="approveUntilDate" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate"></a>

```java
public java.lang.String getApproveUntilDate();
```

- *Type:* java.lang.String

---

##### `complianceLevel`<sup>Required</sup> <a name="complianceLevel" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel"></a>

```java
public java.lang.String getComplianceLevel();
```

- *Type:* java.lang.String

---

##### `enableNonSecurity`<sup>Required</sup> <a name="enableNonSecurity" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity"></a>

```java
public IResolvable getEnableNonSecurity();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `patchFilterGroup`<sup>Required</sup> <a name="patchFilterGroup" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference getPatchFilterGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRules">DataAwsccSsmPatchBaselineApprovalRulesPatchRules</a>

---


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference;

new DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters">patchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchFilters`<sup>Required</sup> <a name="patchFilters" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList getPatchFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList;

new DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference <a name="DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference;

new DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">DataAwsccSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>

---


### DataAwsccSsmPatchBaselineGlobalFiltersOutputReference <a name="DataAwsccSsmPatchBaselineGlobalFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference;

new DataAwsccSsmPatchBaselineGlobalFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters">patchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList">DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFilters">DataAwsccSsmPatchBaselineGlobalFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchFilters`<sup>Required</sup> <a name="patchFilters" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters"></a>

```java
public DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList getPatchFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList">DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineGlobalFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFilters">DataAwsccSsmPatchBaselineGlobalFilters</a>

---


### DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList <a name="DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList;

new DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.get"></a>

```java
public DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference <a name="DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference;

new DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters">DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters">DataAwsccSsmPatchBaselineGlobalFiltersPatchFilters</a>

---


### DataAwsccSsmPatchBaselineSourcesList <a name="DataAwsccSsmPatchBaselineSourcesList" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineSourcesList;

new DataAwsccSsmPatchBaselineSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.get"></a>

```java
public DataAwsccSsmPatchBaselineSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSsmPatchBaselineSourcesOutputReference <a name="DataAwsccSsmPatchBaselineSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineSourcesOutputReference;

new DataAwsccSsmPatchBaselineSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSources">DataAwsccSsmPatchBaselineSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSourcesOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineSources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineSources">DataAwsccSsmPatchBaselineSources</a>

---


### DataAwsccSsmPatchBaselineTagsList <a name="DataAwsccSsmPatchBaselineTagsList" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineTagsList;

new DataAwsccSsmPatchBaselineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.get"></a>

```java
public DataAwsccSsmPatchBaselineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSsmPatchBaselineTagsOutputReference <a name="DataAwsccSsmPatchBaselineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_patch_baseline.DataAwsccSsmPatchBaselineTagsOutputReference;

new DataAwsccSsmPatchBaselineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTags">DataAwsccSsmPatchBaselineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmPatchBaselineTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmPatchBaseline.DataAwsccSsmPatchBaselineTags">DataAwsccSsmPatchBaselineTags</a>

---



