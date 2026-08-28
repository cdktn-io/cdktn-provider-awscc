# `dataAwsccCodepipelinePipeline` Submodule <a name="`dataAwsccCodepipelinePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodepipelinePipeline <a name="DataAwsccCodepipelinePipeline" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline awscc_codepipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipeline;

DataAwsccCodepipelinePipeline.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline#id DataAwsccCodepipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipeline;

DataAwsccCodepipelinePipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipeline;

DataAwsccCodepipelinePipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipeline;

DataAwsccCodepipelinePipeline.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipeline;

DataAwsccCodepipelinePipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCodepipelinePipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCodepipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCodepipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodepipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores">artifactStores</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions">disableInboundStageTransitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode">executionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType">pipelineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate">restartExecutionOnUpdate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoreOutputReference getArtifactStore();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a>

---

##### `artifactStores`<sup>Required</sup> <a name="artifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoresList getArtifactStores();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a>

---

##### `disableInboundStageTransitions`<sup>Required</sup> <a name="disableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions"></a>

```java
public DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList getDisableInboundStageTransitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a>

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode"></a>

```java
public java.lang.String getExecutionMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType"></a>

```java
public java.lang.String getPipelineType();
```

- *Type:* java.lang.String

---

##### `restartExecutionOnUpdate`<sup>Required</sup> <a name="restartExecutionOnUpdate" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate"></a>

```java
public IResolvable getRestartExecutionOnUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages"></a>

```java
public DataAwsccCodepipelinePipelineStagesList getStages();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags"></a>

```java
public DataAwsccCodepipelinePipelineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers"></a>

```java
public DataAwsccCodepipelinePipelineTriggersList getTriggers();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables"></a>

```java
public DataAwsccCodepipelinePipelineVariablesList getVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodepipelinePipelineArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStore;

DataAwsccCodepipelinePipelineArtifactStore.builder()
    .build();
```


### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey;

DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey.builder()
    .build();
```


### DataAwsccCodepipelinePipelineArtifactStores <a name="DataAwsccCodepipelinePipelineArtifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStores;

DataAwsccCodepipelinePipelineArtifactStores.builder()
    .build();
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore;

DataAwsccCodepipelinePipelineArtifactStoresArtifactStore.builder()
    .build();
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey;

DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey.builder()
    .build();
```


### DataAwsccCodepipelinePipelineConfig <a name="DataAwsccCodepipelinePipelineConfig" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineConfig;

DataAwsccCodepipelinePipelineConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline#id DataAwsccCodepipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodepipelinePipelineDisableInboundStageTransitions <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions;

DataAwsccCodepipelinePipelineDisableInboundStageTransitions.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStages <a name="DataAwsccCodepipelinePipelineStages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStages;

DataAwsccCodepipelinePipelineStages.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesActions <a name="DataAwsccCodepipelinePipelineStagesActions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActions;

DataAwsccCodepipelinePipelineStagesActions.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesActionsActionTypeId <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId;

DataAwsccCodepipelinePipelineStagesActionsActionTypeId.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables;

DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesActionsInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts;

DataAwsccCodepipelinePipelineStagesActionsInputArtifacts.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts;

DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesBeforeEntry <a name="DataAwsccCodepipelinePipelineStagesBeforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry;

DataAwsccCodepipelinePipelineStagesBeforeEntry.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditions <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions;

DataAwsccCodepipelinePipelineStagesBeforeEntryConditions.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules;

DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts;

DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId;

DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesBlockers <a name="DataAwsccCodepipelinePipelineStagesBlockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBlockers;

DataAwsccCodepipelinePipelineStagesBlockers.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnFailure <a name="DataAwsccCodepipelinePipelineStagesOnFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailure;

DataAwsccCodepipelinePipelineStagesOnFailure.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditions <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions;

DataAwsccCodepipelinePipelineStagesOnFailureConditions.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules;

DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts;

DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId;

DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration;

DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnSuccess <a name="DataAwsccCodepipelinePipelineStagesOnSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccess;

DataAwsccCodepipelinePipelineStagesOnSuccess.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditions <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions;

DataAwsccCodepipelinePipelineStagesOnSuccessConditions.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules;

DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts;

DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts.builder()
    .build();
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId;

DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTags <a name="DataAwsccCodepipelinePipelineTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTags;

DataAwsccCodepipelinePipelineTags.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggers <a name="DataAwsccCodepipelinePipelineTriggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggers;

DataAwsccCodepipelinePipelineTriggers.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfiguration <a name="DataAwsccCodepipelinePipelineTriggersGitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration;

DataAwsccCodepipelinePipelineTriggersGitConfiguration.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPush <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPush" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPush.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths.builder()
    .build();
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags;

DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags.builder()
    .build();
```


### DataAwsccCodepipelinePipelineVariables <a name="DataAwsccCodepipelinePipelineVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineVariables;

DataAwsccCodepipelinePipelineVariables.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference;

new DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference;

new DataAwsccCodepipelinePipelineArtifactStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStore getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference;

new DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference;

new DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoresArtifactStore getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresList <a name="DataAwsccCodepipelinePipelineArtifactStoresList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoresList;

new DataAwsccCodepipelinePipelineArtifactStoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineArtifactStoresOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference;

new DataAwsccCodepipelinePipelineArtifactStoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference getArtifactStore();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineArtifactStores getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a>

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList;

new DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get"></a>

```java
public DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference;

new DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineDisableInboundStageTransitions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a>

---


### DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference;

new DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsActionTypeId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList;

new DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference;

new DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a>

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList;

new DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference;

new DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsInputArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsList <a name="DataAwsccCodepipelinePipelineStagesActionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsList;

new DataAwsccCodepipelinePipelineStagesActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList;

new DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference;

new DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files">files</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files"></a>

```java
public java.util.List<java.lang.String> getFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference;

new DataAwsccCodepipelinePipelineStagesActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId">actionTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts">outputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables">outputVariables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder">runOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeId`<sup>Required</sup> <a name="actionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference getActionTypeId();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a>

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList getEnvironmentVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a>

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList getInputArtifacts();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `outputArtifacts`<sup>Required</sup> <a name="outputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList getOutputArtifacts();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a>

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables"></a>

```java
public java.util.List<java.lang.String> getOutputVariables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `runOrder`<sup>Required</sup> <a name="runOrder" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder"></a>

```java
public java.lang.Number getRunOrder();
```

- *Type:* java.lang.Number

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesActions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList getInputArtifacts();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference getRuleTypeId();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference;

new DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference;

new DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a>

---


### DataAwsccCodepipelinePipelineStagesBlockersList <a name="DataAwsccCodepipelinePipelineStagesBlockersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBlockersList;

new DataAwsccCodepipelinePipelineStagesBlockersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesBlockersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesBlockersOutputReference <a name="DataAwsccCodepipelinePipelineStagesBlockersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference;

new DataAwsccCodepipelinePipelineStagesBlockersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesBlockers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a>

---


### DataAwsccCodepipelinePipelineStagesList <a name="DataAwsccCodepipelinePipelineStagesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesList;

new DataAwsccCodepipelinePipelineStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList getInputArtifacts();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference getRuleTypeId();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference;

new DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference;

new DataAwsccCodepipelinePipelineStagesOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration">retryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `retryConfiguration`<sup>Required</sup> <a name="retryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference getRetryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailure getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference;

new DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode">retryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retryMode`<sup>Required</sup> <a name="retryMode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode"></a>

```java
public java.lang.String getRetryMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList getInputArtifacts();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference getRuleTypeId();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference;

new DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference;

new DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a>

---


### DataAwsccCodepipelinePipelineStagesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineStagesOutputReference;

new DataAwsccCodepipelinePipelineStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry">beforeEntry</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers">blockers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions"></a>

```java
public DataAwsccCodepipelinePipelineStagesActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a>

---

##### `beforeEntry`<sup>Required</sup> <a name="beforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry"></a>

```java
public DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference getBeforeEntry();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a>

---

##### `blockers`<sup>Required</sup> <a name="blockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers"></a>

```java
public DataAwsccCodepipelinePipelineStagesBlockersList getBlockers();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess"></a>

```java
public DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference getOnSuccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineStages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a>

---


### DataAwsccCodepipelinePipelineTagsList <a name="DataAwsccCodepipelinePipelineTagsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTagsList;

new DataAwsccCodepipelinePipelineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get"></a>

```java
public DataAwsccCodepipelinePipelineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineTagsOutputReference <a name="DataAwsccCodepipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTagsOutputReference;

new DataAwsccCodepipelinePipelineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName">sourceActionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList getPullRequest();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList getPush();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a>

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName"></a>

```java
public java.lang.String getSourceActionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference getBranches();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference getFilePaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference getBranches();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference getFilePaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPush getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference;

new DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a>

---


### DataAwsccCodepipelinePipelineTriggersList <a name="DataAwsccCodepipelinePipelineTriggersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersList;

new DataAwsccCodepipelinePipelineTriggersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get"></a>

```java
public DataAwsccCodepipelinePipelineTriggersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineTriggersOutputReference <a name="DataAwsccCodepipelinePipelineTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineTriggersOutputReference;

new DataAwsccCodepipelinePipelineTriggersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration"></a>

```java
public DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference getGitConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a>

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineTriggers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a>

---


### DataAwsccCodepipelinePipelineVariablesList <a name="DataAwsccCodepipelinePipelineVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineVariablesList;

new DataAwsccCodepipelinePipelineVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get"></a>

```java
public DataAwsccCodepipelinePipelineVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCodepipelinePipelineVariablesOutputReference <a name="DataAwsccCodepipelinePipelineVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codepipeline_pipeline.DataAwsccCodepipelinePipelineVariablesOutputReference;

new DataAwsccCodepipelinePipelineVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue"></a>

```java
public DataAwsccCodepipelinePipelineVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a>

---



