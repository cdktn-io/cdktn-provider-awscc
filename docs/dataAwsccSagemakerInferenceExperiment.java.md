# `dataAwsccSagemakerInferenceExperiment` Submodule <a name="`dataAwsccSagemakerInferenceExperiment` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerInferenceExperiment <a name="DataAwsccSagemakerInferenceExperiment" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperiment;

DataAwsccSagemakerInferenceExperiment.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_inference_experiment#id DataAwsccSagemakerInferenceExperiment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperiment;

DataAwsccSagemakerInferenceExperiment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperiment;

DataAwsccSagemakerInferenceExperiment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperiment;

DataAwsccSagemakerInferenceExperiment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperiment;

DataAwsccSagemakerInferenceExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSagemakerInferenceExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSagemakerInferenceExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSagemakerInferenceExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerInferenceExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dataStorageConfig">dataStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointMetadata">endpointMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference">DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.modelVariants">modelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList">DataAwsccSagemakerInferenceExperimentModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference">DataAwsccSagemakerInferenceExperimentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.shadowModeConfig">shadowModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference">DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList">DataAwsccSagemakerInferenceExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `dataStorageConfig`<sup>Required</sup> <a name="dataStorageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dataStorageConfig"></a>

```java
public DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference getDataStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `endpointMetadata`<sup>Required</sup> <a name="endpointMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointMetadata"></a>

```java
public DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference getEndpointMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference">DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference</a>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `modelVariants`<sup>Required</sup> <a name="modelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.modelVariants"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariantsList getModelVariants();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList">DataAwsccSagemakerInferenceExperimentModelVariantsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.schedule"></a>

```java
public DataAwsccSagemakerInferenceExperimentScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference">DataAwsccSagemakerInferenceExperimentScheduleOutputReference</a>

---

##### `shadowModeConfig`<sup>Required</sup> <a name="shadowModeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.shadowModeConfig"></a>

```java
public DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference getShadowModeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference">DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tags"></a>

```java
public DataAwsccSagemakerInferenceExperimentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList">DataAwsccSagemakerInferenceExperimentTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerInferenceExperimentConfig <a name="DataAwsccSagemakerInferenceExperimentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentConfig;

DataAwsccSagemakerInferenceExperimentConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_inference_experiment#id DataAwsccSagemakerInferenceExperiment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerInferenceExperimentDataStorageConfig <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig;

DataAwsccSagemakerInferenceExperimentDataStorageConfig.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType;

DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentEndpointMetadata <a name="DataAwsccSagemakerInferenceExperimentEndpointMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata;

DataAwsccSagemakerInferenceExperimentEndpointMetadata.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentModelVariants <a name="DataAwsccSagemakerInferenceExperimentModelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariants;

DataAwsccSagemakerInferenceExperimentModelVariants.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig;

DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig;

DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentSchedule <a name="DataAwsccSagemakerInferenceExperimentSchedule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentSchedule;

DataAwsccSagemakerInferenceExperimentSchedule.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentShadowModeConfig <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig;

DataAwsccSagemakerInferenceExperimentShadowModeConfig.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants;

DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants.builder()
    .build();
```


### DataAwsccSagemakerInferenceExperimentTags <a name="DataAwsccSagemakerInferenceExperimentTags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentTags;

DataAwsccSagemakerInferenceExperimentTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference;

new DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes">csvContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes">jsonContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvContentTypes`<sup>Required</sup> <a name="csvContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes"></a>

```java
public java.util.List<java.lang.String> getCsvContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jsonContentTypes`<sup>Required</sup> <a name="jsonContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes"></a>

```java
public java.util.List<java.lang.String> getJsonContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType</a>

---


### DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference;

new DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType">contentType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig">DataAwsccSagemakerInferenceExperimentDataStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType"></a>

```java
public DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference getContentType();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentDataStorageConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig">DataAwsccSagemakerInferenceExperimentDataStorageConfig</a>

---


### DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference <a name="DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference;

new DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName">endpointConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus">endpointStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata">DataAwsccSagemakerInferenceExperimentEndpointMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName"></a>

```java
public java.lang.String getEndpointConfigName();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus"></a>

```java
public java.lang.String getEndpointStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentEndpointMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata">DataAwsccSagemakerInferenceExperimentEndpointMetadata</a>

---


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference;

new DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType">infrastructureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig">realTimeInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType"></a>

```java
public java.lang.String getInfrastructureType();
```

- *Type:* java.lang.String

---

##### `realTimeInferenceConfig`<sup>Required</sup> <a name="realTimeInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference getRealTimeInferenceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference;

new DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---


### DataAwsccSagemakerInferenceExperimentModelVariantsList <a name="DataAwsccSagemakerInferenceExperimentModelVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariantsList;

new DataAwsccSagemakerInferenceExperimentModelVariantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.get"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference <a name="DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference;

new DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig">infrastructureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.variantName">variantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants">DataAwsccSagemakerInferenceExperimentModelVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `infrastructureConfig`<sup>Required</sup> <a name="infrastructureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference getInfrastructureConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a>

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.variantName"></a>

```java
public java.lang.String getVariantName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentModelVariants getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants">DataAwsccSagemakerInferenceExperimentModelVariants</a>

---


### DataAwsccSagemakerInferenceExperimentScheduleOutputReference <a name="DataAwsccSagemakerInferenceExperimentScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference;

new DataAwsccSagemakerInferenceExperimentScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule">DataAwsccSagemakerInferenceExperimentSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule">DataAwsccSagemakerInferenceExperimentSchedule</a>

---


### DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference;

new DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants">shadowModelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName">sourceModelVariantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig">DataAwsccSagemakerInferenceExperimentShadowModeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shadowModelVariants`<sup>Required</sup> <a name="shadowModelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants"></a>

```java
public DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList getShadowModelVariants();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a>

---

##### `sourceModelVariantName`<sup>Required</sup> <a name="sourceModelVariantName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName"></a>

```java
public java.lang.String getSourceModelVariantName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentShadowModeConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig">DataAwsccSagemakerInferenceExperimentShadowModeConfig</a>

---


### DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList;

new DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get"></a>

```java
public DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference;

new DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName">shadowModelVariantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `shadowModelVariantName`<sup>Required</sup> <a name="shadowModelVariantName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName"></a>

```java
public java.lang.String getShadowModelVariantName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>

---


### DataAwsccSagemakerInferenceExperimentTagsList <a name="DataAwsccSagemakerInferenceExperimentTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentTagsList;

new DataAwsccSagemakerInferenceExperimentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.get"></a>

```java
public DataAwsccSagemakerInferenceExperimentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSagemakerInferenceExperimentTagsOutputReference <a name="DataAwsccSagemakerInferenceExperimentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_sagemaker_inference_experiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference;

new DataAwsccSagemakerInferenceExperimentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags">DataAwsccSagemakerInferenceExperimentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccSagemakerInferenceExperimentTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags">DataAwsccSagemakerInferenceExperimentTags</a>

---



