# `dataAwsccSagemakerAlgorithm` Submodule <a name="`dataAwsccSagemakerAlgorithm` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAlgorithm <a name="DataAwsccSagemakerAlgorithm" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_algorithm awscc_sagemaker_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithm;

DataAwsccSagemakerAlgorithm.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_algorithm#id DataAwsccSagemakerAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithm;

DataAwsccSagemakerAlgorithm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithm;

DataAwsccSagemakerAlgorithm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithm;

DataAwsccSagemakerAlgorithm.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithm;

DataAwsccSagemakerAlgorithm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSagemakerAlgorithm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSagemakerAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSagemakerAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmArn">algorithmArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmDescription">algorithmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmName">algorithmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.certifyForMarketplace">certifyForMarketplace</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList">DataAwsccSagemakerAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `algorithmArn`<sup>Required</sup> <a name="algorithmArn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmArn"></a>

```java
public java.lang.String getAlgorithmArn();
```

- *Type:* java.lang.String

---

##### `algorithmDescription`<sup>Required</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmDescription"></a>

```java
public java.lang.String getAlgorithmDescription();
```

- *Type:* java.lang.String

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmName"></a>

```java
public java.lang.String getAlgorithmName();
```

- *Type:* java.lang.String

---

##### `certifyForMarketplace`<sup>Required</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.certifyForMarketplace"></a>

```java
public IResolvable getCertifyForMarketplace();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `inferenceSpecification`<sup>Required</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.inferenceSpecification"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference getInferenceSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tags"></a>

```java
public DataAwsccSagemakerAlgorithmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList">DataAwsccSagemakerAlgorithmTagsList</a>

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.trainingSpecification"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference getTrainingSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAlgorithmConfig <a name="DataAwsccSagemakerAlgorithmConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmConfig;

DataAwsccSagemakerAlgorithmConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_algorithm#id DataAwsccSagemakerAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAlgorithmInferenceSpecification <a name="DataAwsccSagemakerAlgorithmInferenceSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecification;

DataAwsccSagemakerAlgorithmInferenceSpecification.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainers <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers;

DataAwsccSagemakerAlgorithmInferenceSpecificationContainers.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput;

DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTags <a name="DataAwsccSagemakerAlgorithmTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTags;

DataAwsccSagemakerAlgorithmTags.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecification;

DataAwsccSagemakerAlgorithmTrainingSpecification.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions;

DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters;

DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;

DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;

DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;

DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;

DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics;

DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.builder()
    .build();
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels;

DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList;

new DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference;

new DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig">dataInputConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInputConfig`<sup>Required</sup> <a name="dataInputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig"></a>

```java
public java.lang.String getDataInputConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference;

new DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname">containerHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment">environment</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion">frameworkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint">isCheckpoint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput">modelInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName">nearestModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers">DataAwsccSagemakerAlgorithmInferenceSpecificationContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname"></a>

```java
public java.lang.String getContainerHostname();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment"></a>

```java
public StringMap getEnvironment();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `frameworkVersion`<sup>Required</sup> <a name="frameworkVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion"></a>

```java
public java.lang.String getFrameworkVersion();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `isCheckpoint`<sup>Required</sup> <a name="isCheckpoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint"></a>

```java
public IResolvable getIsCheckpoint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `modelInput`<sup>Required</sup> <a name="modelInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference getModelInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a>

---

##### `nearestModelName`<sup>Required</sup> <a name="nearestModelName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName"></a>

```java
public java.lang.String getNearestModelName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecificationContainers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers">DataAwsccSagemakerAlgorithmInferenceSpecificationContainers</a>

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference;

new DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes">supportedRealtimeInferenceInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes">supportedResponseMimeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes">supportedTransformInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification">DataAwsccSagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.containers"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList getContainers();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList</a>

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedRealtimeInferenceInstanceTypes`<sup>Required</sup> <a name="supportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedRealtimeInferenceInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedResponseMimeTypes`<sup>Required</sup> <a name="supportedResponseMimeTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedResponseMimeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTransformInstanceTypes`<sup>Required</sup> <a name="supportedTransformInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmInferenceSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification">DataAwsccSagemakerAlgorithmInferenceSpecification</a>

---


### DataAwsccSagemakerAlgorithmTagsList <a name="DataAwsccSagemakerAlgorithmTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTagsList;

new DataAwsccSagemakerAlgorithmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get"></a>

```java
public DataAwsccSagemakerAlgorithmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerAlgorithmTagsOutputReference <a name="DataAwsccSagemakerAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTagsOutputReference;

new DataAwsccSagemakerAlgorithmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags">DataAwsccSagemakerAlgorithmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags">DataAwsccSagemakerAlgorithmTags</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList;

new DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters">supportedHyperParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes">supportedTrainingInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics">supportedTuningJobObjectiveMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining">supportsDistributedTraining</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels">trainingChannels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage">trainingImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest">trainingImageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification">DataAwsccSagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList getMetricDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a>

---

##### `supportedHyperParameters`<sup>Required</sup> <a name="supportedHyperParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList getSupportedHyperParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a>

---

##### `supportedTrainingInstanceTypes`<sup>Required</sup> <a name="supportedTrainingInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTrainingInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTuningJobObjectiveMetrics`<sup>Required</sup> <a name="supportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList getSupportedTuningJobObjectiveMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a>

---

##### `supportsDistributedTraining`<sup>Required</sup> <a name="supportsDistributedTraining" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining"></a>

```java
public IResolvable getSupportsDistributedTraining();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `trainingChannels`<sup>Required</sup> <a name="trainingChannels" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList getTrainingChannels();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a>

---

##### `trainingImage`<sup>Required</sup> <a name="trainingImage" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage"></a>

```java
public java.lang.String getTrainingImage();
```

- *Type:* java.lang.String

---

##### `trainingImageDigest`<sup>Required</sup> <a name="trainingImageDigest" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest"></a>

```java
public java.lang.String getTrainingImageDigest();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification">DataAwsccSagemakerAlgorithmTrainingSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired">isRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable">isTunable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired"></a>

```java
public IResolvable getIsRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isTunable`<sup>Required</sup> <a name="isTunable" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable"></a>

```java
public IResolvable getIsTunable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification">categoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification">continuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification">integerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoricalParameterRangeSpecification`<sup>Required</sup> <a name="categoricalParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference getCategoricalParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a>

---

##### `continuousParameterRangeSpecification`<sup>Required</sup> <a name="continuousParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference getContinuousParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a>

---

##### `integerParameterRangeSpecification`<sup>Required</sup> <a name="integerParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference getIntegerParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList;

new DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_algorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference;

new DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired">isRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes">supportedCompressionTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes">supportedInputModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired"></a>

```java
public IResolvable getIsRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `supportedCompressionTypes`<sup>Required</sup> <a name="supportedCompressionTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedCompressionTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedInputModes`<sup>Required</sup> <a name="supportedInputModes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes"></a>

```java
public java.util.List<java.lang.String> getSupportedInputModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels</a>

---



