# `sagemakerAlgorithm` Submodule <a name="`sagemakerAlgorithm` Submodule" id="@cdktn/provider-awscc.sagemakerAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAlgorithm <a name="SagemakerAlgorithm" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithm;

SagemakerAlgorithm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .algorithmName(java.lang.String)
    .trainingSpecification(SagemakerAlgorithmTrainingSpecification)
//  .algorithmDescription(java.lang.String)
//  .certifyForMarketplace(java.lang.Boolean|IResolvable)
//  .inferenceSpecification(SagemakerAlgorithmInferenceSpecification)
//  .tags(IResolvable|java.util.List<SagemakerAlgorithmTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmName">algorithmName</a></code> | <code>java.lang.String</code> | The name of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmDescription">algorithmDescription</a></code> | <code>java.lang.String</code> | A description of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.certifyForMarketplace">certifyForMarketplace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to certify the algorithm so that it can be listed in AWS Marketplace. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmName"></a>

- *Type:* java.lang.String

The name of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.trainingSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}.

---

##### `algorithmDescription`<sup>Optional</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmDescription"></a>

- *Type:* java.lang.String

A description of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}

---

##### `certifyForMarketplace`<sup>Optional</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.certifyForMarketplace"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to certify the algorithm so that it can be listed in AWS Marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}

---

##### `inferenceSpecification`<sup>Optional</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.inferenceSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification">putInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification">putTrainingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetAlgorithmDescription">resetAlgorithmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetCertifyForMarketplace">resetCertifyForMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetInferenceSpecification">resetInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInferenceSpecification` <a name="putInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification"></a>

```java
public void putInferenceSpecification(SagemakerAlgorithmInferenceSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerAlgorithmTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>>

---

##### `putTrainingSpecification` <a name="putTrainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification"></a>

```java
public void putTrainingSpecification(SagemakerAlgorithmTrainingSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---

##### `resetAlgorithmDescription` <a name="resetAlgorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetAlgorithmDescription"></a>

```java
public void resetAlgorithmDescription()
```

##### `resetCertifyForMarketplace` <a name="resetCertifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetCertifyForMarketplace"></a>

```java
public void resetCertifyForMarketplace()
```

##### `resetInferenceSpecification` <a name="resetInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetInferenceSpecification"></a>

```java
public void resetInferenceSpecification()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithm;

SagemakerAlgorithm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithm;

SagemakerAlgorithm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithm;

SagemakerAlgorithm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithm;

SagemakerAlgorithm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerAlgorithm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmArn">algorithmArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference">SagemakerAlgorithmInferenceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList">SagemakerAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescriptionInput">algorithmDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmNameInput">algorithmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplaceInput">certifyForMarketplaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecificationInput">inferenceSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecificationInput">trainingSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescription">algorithmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmName">algorithmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplace">certifyForMarketplace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `algorithmArn`<sup>Required</sup> <a name="algorithmArn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmArn"></a>

```java
public java.lang.String getAlgorithmArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inferenceSpecification`<sup>Required</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecification"></a>

```java
public SagemakerAlgorithmInferenceSpecificationOutputReference getInferenceSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference">SagemakerAlgorithmInferenceSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tags"></a>

```java
public SagemakerAlgorithmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList">SagemakerAlgorithmTagsList</a>

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationOutputReference getTrainingSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationOutputReference</a>

---

##### `algorithmDescriptionInput`<sup>Optional</sup> <a name="algorithmDescriptionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescriptionInput"></a>

```java
public java.lang.String getAlgorithmDescriptionInput();
```

- *Type:* java.lang.String

---

##### `algorithmNameInput`<sup>Optional</sup> <a name="algorithmNameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmNameInput"></a>

```java
public java.lang.String getAlgorithmNameInput();
```

- *Type:* java.lang.String

---

##### `certifyForMarketplaceInput`<sup>Optional</sup> <a name="certifyForMarketplaceInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplaceInput"></a>

```java
public java.lang.Boolean|IResolvable getCertifyForMarketplaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inferenceSpecificationInput`<sup>Optional</sup> <a name="inferenceSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecificationInput"></a>

```java
public IResolvable|SagemakerAlgorithmInferenceSpecification getInferenceSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>>

---

##### `trainingSpecificationInput`<sup>Optional</sup> <a name="trainingSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecificationInput"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecification getTrainingSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---

##### `algorithmDescription`<sup>Required</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescription"></a>

```java
public java.lang.String getAlgorithmDescription();
```

- *Type:* java.lang.String

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmName"></a>

```java
public java.lang.String getAlgorithmName();
```

- *Type:* java.lang.String

---

##### `certifyForMarketplace`<sup>Required</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplace"></a>

```java
public java.lang.Boolean|IResolvable getCertifyForMarketplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAlgorithmConfig <a name="SagemakerAlgorithmConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmConfig;

SagemakerAlgorithmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .algorithmName(java.lang.String)
    .trainingSpecification(SagemakerAlgorithmTrainingSpecification)
//  .algorithmDescription(java.lang.String)
//  .certifyForMarketplace(java.lang.Boolean|IResolvable)
//  .inferenceSpecification(SagemakerAlgorithmInferenceSpecification)
//  .tags(IResolvable|java.util.List<SagemakerAlgorithmTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmName">algorithmName</a></code> | <code>java.lang.String</code> | The name of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmDescription">algorithmDescription</a></code> | <code>java.lang.String</code> | A description of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.certifyForMarketplace">certifyForMarketplace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to certify the algorithm so that it can be listed in AWS Marketplace. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmName"></a>

```java
public java.lang.String getAlgorithmName();
```

- *Type:* java.lang.String

The name of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.trainingSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecification getTrainingSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}.

---

##### `algorithmDescription`<sup>Optional</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmDescription"></a>

```java
public java.lang.String getAlgorithmDescription();
```

- *Type:* java.lang.String

A description of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}

---

##### `certifyForMarketplace`<sup>Optional</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.certifyForMarketplace"></a>

```java
public java.lang.Boolean|IResolvable getCertifyForMarketplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to certify the algorithm so that it can be listed in AWS Marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}

---

##### `inferenceSpecification`<sup>Optional</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.inferenceSpecification"></a>

```java
public SagemakerAlgorithmInferenceSpecification getInferenceSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}

---

### SagemakerAlgorithmInferenceSpecification <a name="SagemakerAlgorithmInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecification;

SagemakerAlgorithmInferenceSpecification.builder()
//  .containers(IResolvable|java.util.List<SagemakerAlgorithmInferenceSpecificationContainers>)
//  .supportedContentTypes(java.util.List<java.lang.String>)
//  .supportedRealtimeInferenceInstanceTypes(java.util.List<java.lang.String>)
//  .supportedResponseMimeTypes(java.util.List<java.lang.String>)
//  .supportedTransformInstanceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.containers">containers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedContentTypes">supportedContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedRealtimeInferenceInstanceTypes">supportedRealtimeInferenceInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedResponseMimeTypes">supportedResponseMimeTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedTransformInstanceTypes">supportedTransformInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.containers"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmInferenceSpecificationContainers> getContainers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}.

---

##### `supportedContentTypes`<sup>Optional</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedContentTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

##### `supportedRealtimeInferenceInstanceTypes`<sup>Optional</sup> <a name="supportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedRealtimeInferenceInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedRealtimeInferenceInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}.

---

##### `supportedResponseMimeTypes`<sup>Optional</sup> <a name="supportedResponseMimeTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedResponseMimeTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedResponseMimeTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}.

---

##### `supportedTransformInstanceTypes`<sup>Optional</sup> <a name="supportedTransformInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedTransformInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}.

---

### SagemakerAlgorithmInferenceSpecificationContainers <a name="SagemakerAlgorithmInferenceSpecificationContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecificationContainers;

SagemakerAlgorithmInferenceSpecificationContainers.builder()
//  .containerHostname(java.lang.String)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .framework(java.lang.String)
//  .frameworkVersion(java.lang.String)
//  .image(java.lang.String)
//  .imageDigest(java.lang.String)
//  .isCheckpoint(java.lang.Boolean|IResolvable)
//  .modelInput(SagemakerAlgorithmInferenceSpecificationContainersModelInput)
//  .nearestModelName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.containerHostname">containerHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.framework">framework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.frameworkVersion">frameworkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.isCheckpoint">isCheckpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.modelInput">modelInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.nearestModelName">nearestModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}. |

---

##### `containerHostname`<sup>Optional</sup> <a name="containerHostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.containerHostname"></a>

```java
public java.lang.String getContainerHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}.

---

##### `frameworkVersion`<sup>Optional</sup> <a name="frameworkVersion" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.frameworkVersion"></a>

```java
public java.lang.String getFrameworkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}.

---

##### `isCheckpoint`<sup>Optional</sup> <a name="isCheckpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.isCheckpoint"></a>

```java
public java.lang.Boolean|IResolvable getIsCheckpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}.

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.modelInput"></a>

```java
public SagemakerAlgorithmInferenceSpecificationContainersModelInput getModelInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}.

---

##### `nearestModelName`<sup>Optional</sup> <a name="nearestModelName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.nearestModelName"></a>

```java
public java.lang.String getNearestModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}.

---

### SagemakerAlgorithmInferenceSpecificationContainersModelInput <a name="SagemakerAlgorithmInferenceSpecificationContainersModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput;

SagemakerAlgorithmInferenceSpecificationContainersModelInput.builder()
//  .dataInputConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.property.dataInputConfig">dataInputConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}. |

---

##### `dataInputConfig`<sup>Optional</sup> <a name="dataInputConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.property.dataInputConfig"></a>

```java
public java.lang.String getDataInputConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}.

---

### SagemakerAlgorithmTags <a name="SagemakerAlgorithmTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTags;

SagemakerAlgorithmTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}.

---

### SagemakerAlgorithmTrainingSpecification <a name="SagemakerAlgorithmTrainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecification;

SagemakerAlgorithmTrainingSpecification.builder()
    .supportedTrainingInstanceTypes(java.util.List<java.lang.String>)
    .trainingChannels(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationTrainingChannels>)
    .trainingImage(java.lang.String)
//  .metricDefinitions(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationMetricDefinitions>)
//  .supportedHyperParameters(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters>)
//  .supportedTuningJobObjectiveMetrics(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics>)
//  .supportsDistributedTraining(java.lang.Boolean|IResolvable)
//  .trainingImageDigest(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTrainingInstanceTypes">supportedTrainingInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingChannels">trainingChannels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImage">trainingImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.metricDefinitions">metricDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedHyperParameters">supportedHyperParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTuningJobObjectiveMetrics">supportedTuningJobObjectiveMetrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportsDistributedTraining">supportsDistributedTraining</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImageDigest">trainingImageDigest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}. |

---

##### `supportedTrainingInstanceTypes`<sup>Required</sup> <a name="supportedTrainingInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTrainingInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTrainingInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}.

---

##### `trainingChannels`<sup>Required</sup> <a name="trainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingChannels"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationTrainingChannels> getTrainingChannels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}.

---

##### `trainingImage`<sup>Required</sup> <a name="trainingImage" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImage"></a>

```java
public java.lang.String getTrainingImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}.

---

##### `metricDefinitions`<sup>Optional</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.metricDefinitions"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationMetricDefinitions> getMetricDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}.

---

##### `supportedHyperParameters`<sup>Optional</sup> <a name="supportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedHyperParameters"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters> getSupportedHyperParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}.

---

##### `supportedTuningJobObjectiveMetrics`<sup>Optional</sup> <a name="supportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTuningJobObjectiveMetrics"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics> getSupportedTuningJobObjectiveMetrics();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}.

---

##### `supportsDistributedTraining`<sup>Optional</sup> <a name="supportsDistributedTraining" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportsDistributedTraining"></a>

```java
public java.lang.Boolean|IResolvable getSupportsDistributedTraining();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}.

---

##### `trainingImageDigest`<sup>Optional</sup> <a name="trainingImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImageDigest"></a>

```java
public java.lang.String getTrainingImageDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}.

---

### SagemakerAlgorithmTrainingSpecificationMetricDefinitions <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions;

SagemakerAlgorithmTrainingSpecificationMetricDefinitions.builder()
//  .name(java.lang.String)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters;

SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.builder()
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .isRequired(java.lang.Boolean|IResolvable)
//  .isTunable(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .range(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isTunable">isTunable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}.

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}.

---

##### `isTunable`<sup>Optional</sup> <a name="isTunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isTunable"></a>

```java
public java.lang.Boolean|IResolvable getIsTunable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.range"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange getRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;

SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.builder()
//  .categoricalParameterRangeSpecification(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification)
//  .continuousParameterRangeSpecification(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification)
//  .integerParameterRangeSpecification(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.categoricalParameterRangeSpecification">categoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.continuousParameterRangeSpecification">continuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.integerParameterRangeSpecification">integerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}. |

---

##### `categoricalParameterRangeSpecification`<sup>Optional</sup> <a name="categoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.categoricalParameterRangeSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification getCategoricalParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}.

---

##### `continuousParameterRangeSpecification`<sup>Optional</sup> <a name="continuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.continuousParameterRangeSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification getContinuousParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}.

---

##### `integerParameterRangeSpecification`<sup>Optional</sup> <a name="integerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.integerParameterRangeSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification getIntegerParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;

SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.builder()
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;

SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.builder()
//  .maxValue(java.lang.String)
//  .minValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.minValue">minValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;

SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.builder()
//  .maxValue(java.lang.String)
//  .minValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.minValue">minValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics;

SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.builder()
//  .metricName(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}. |

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}.

---

### SagemakerAlgorithmTrainingSpecificationTrainingChannels <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels;

SagemakerAlgorithmTrainingSpecificationTrainingChannels.builder()
    .name(java.lang.String)
    .supportedContentTypes(java.util.List<java.lang.String>)
    .supportedInputModes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .isRequired(java.lang.Boolean|IResolvable)
//  .supportedCompressionTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedContentTypes">supportedContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedInputModes">supportedInputModes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedCompressionTypes">supportedCompressionTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedContentTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

##### `supportedInputModes`<sup>Required</sup> <a name="supportedInputModes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedInputModes"></a>

```java
public java.util.List<java.lang.String> getSupportedInputModes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}.

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}.

---

##### `supportedCompressionTypes`<sup>Optional</sup> <a name="supportedCompressionTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedCompressionTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedCompressionTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAlgorithmInferenceSpecificationContainersList <a name="SagemakerAlgorithmInferenceSpecificationContainersList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecificationContainersList;

new SagemakerAlgorithmInferenceSpecificationContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get"></a>

```java
public SagemakerAlgorithmInferenceSpecificationContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmInferenceSpecificationContainers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>>

---


### SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference <a name="SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference;

new SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resetDataInputConfig">resetDataInputConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataInputConfig` <a name="resetDataInputConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resetDataInputConfig"></a>

```java
public void resetDataInputConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfigInput">dataInputConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig">dataInputConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInputConfigInput`<sup>Optional</sup> <a name="dataInputConfigInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfigInput"></a>

```java
public java.lang.String getDataInputConfigInput();
```

- *Type:* java.lang.String

---

##### `dataInputConfig`<sup>Required</sup> <a name="dataInputConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig"></a>

```java
public java.lang.String getDataInputConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmInferenceSpecificationContainersModelInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---


### SagemakerAlgorithmInferenceSpecificationContainersOutputReference <a name="SagemakerAlgorithmInferenceSpecificationContainersOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference;

new SagemakerAlgorithmInferenceSpecificationContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput">putModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetContainerHostname">resetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFrameworkVersion">resetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetIsCheckpoint">resetIsCheckpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetModelInput">resetModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetNearestModelName">resetNearestModelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelInput` <a name="putModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput"></a>

```java
public void putModelInput(SagemakerAlgorithmInferenceSpecificationContainersModelInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---

##### `resetContainerHostname` <a name="resetContainerHostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetContainerHostname"></a>

```java
public void resetContainerHostname()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetFramework` <a name="resetFramework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFramework"></a>

```java
public void resetFramework()
```

##### `resetFrameworkVersion` <a name="resetFrameworkVersion" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFrameworkVersion"></a>

```java
public void resetFrameworkVersion()
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetImageDigest` <a name="resetImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImageDigest"></a>

```java
public void resetImageDigest()
```

##### `resetIsCheckpoint` <a name="resetIsCheckpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetIsCheckpoint"></a>

```java
public void resetIsCheckpoint()
```

##### `resetModelInput` <a name="resetModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetModelInput"></a>

```java
public void resetModelInput()
```

##### `resetNearestModelName` <a name="resetNearestModelName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetNearestModelName"></a>

```java
public void resetNearestModelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput">modelInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostnameInput">containerHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersionInput">frameworkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpointInput">isCheckpointInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInputInput">modelInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelNameInput">nearestModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname">containerHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion">frameworkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint">isCheckpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName">nearestModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Required</sup> <a name="modelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput"></a>

```java
public SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference getModelInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a>

---

##### `containerHostnameInput`<sup>Optional</sup> <a name="containerHostnameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostnameInput"></a>

```java
public java.lang.String getContainerHostnameInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `frameworkVersionInput`<sup>Optional</sup> <a name="frameworkVersionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersionInput"></a>

```java
public java.lang.String getFrameworkVersionInput();
```

- *Type:* java.lang.String

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigestInput"></a>

```java
public java.lang.String getImageDigestInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `isCheckpointInput`<sup>Optional</sup> <a name="isCheckpointInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpointInput"></a>

```java
public java.lang.Boolean|IResolvable getIsCheckpointInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modelInputInput`<sup>Optional</sup> <a name="modelInputInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInputInput"></a>

```java
public IResolvable|SagemakerAlgorithmInferenceSpecificationContainersModelInput getModelInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---

##### `nearestModelNameInput`<sup>Optional</sup> <a name="nearestModelNameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelNameInput"></a>

```java
public java.lang.String getNearestModelNameInput();
```

- *Type:* java.lang.String

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname"></a>

```java
public java.lang.String getContainerHostname();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `frameworkVersion`<sup>Required</sup> <a name="frameworkVersion" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion"></a>

```java
public java.lang.String getFrameworkVersion();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `isCheckpoint`<sup>Required</sup> <a name="isCheckpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint"></a>

```java
public java.lang.Boolean|IResolvable getIsCheckpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nearestModelName`<sup>Required</sup> <a name="nearestModelName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName"></a>

```java
public java.lang.String getNearestModelName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmInferenceSpecificationContainers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>

---


### SagemakerAlgorithmInferenceSpecificationOutputReference <a name="SagemakerAlgorithmInferenceSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmInferenceSpecificationOutputReference;

new SagemakerAlgorithmInferenceSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedContentTypes">resetSupportedContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedRealtimeInferenceInstanceTypes">resetSupportedRealtimeInferenceInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedResponseMimeTypes">resetSupportedResponseMimeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedTransformInstanceTypes">resetSupportedTransformInstanceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers"></a>

```java
public void putContainers(IResolvable|java.util.List<SagemakerAlgorithmInferenceSpecificationContainers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>>

---

##### `resetContainers` <a name="resetContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetContainers"></a>

```java
public void resetContainers()
```

##### `resetSupportedContentTypes` <a name="resetSupportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedContentTypes"></a>

```java
public void resetSupportedContentTypes()
```

##### `resetSupportedRealtimeInferenceInstanceTypes` <a name="resetSupportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedRealtimeInferenceInstanceTypes"></a>

```java
public void resetSupportedRealtimeInferenceInstanceTypes()
```

##### `resetSupportedResponseMimeTypes` <a name="resetSupportedResponseMimeTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedResponseMimeTypes"></a>

```java
public void resetSupportedResponseMimeTypes()
```

##### `resetSupportedTransformInstanceTypes` <a name="resetSupportedTransformInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedTransformInstanceTypes"></a>

```java
public void resetSupportedTransformInstanceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList">SagemakerAlgorithmInferenceSpecificationContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containersInput">containersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypesInput">supportedContentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypesInput">supportedRealtimeInferenceInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypesInput">supportedResponseMimeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypesInput">supportedTransformInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes">supportedRealtimeInferenceInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes">supportedResponseMimeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes">supportedTransformInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containers"></a>

```java
public SagemakerAlgorithmInferenceSpecificationContainersList getContainers();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList">SagemakerAlgorithmInferenceSpecificationContainersList</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containersInput"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmInferenceSpecificationContainers> getContainersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>>

---

##### `supportedContentTypesInput`<sup>Optional</sup> <a name="supportedContentTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedRealtimeInferenceInstanceTypesInput`<sup>Optional</sup> <a name="supportedRealtimeInferenceInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedRealtimeInferenceInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedResponseMimeTypesInput`<sup>Optional</sup> <a name="supportedResponseMimeTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedResponseMimeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTransformInstanceTypesInput`<sup>Optional</sup> <a name="supportedTransformInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedRealtimeInferenceInstanceTypes`<sup>Required</sup> <a name="supportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedRealtimeInferenceInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedResponseMimeTypes`<sup>Required</sup> <a name="supportedResponseMimeTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedResponseMimeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTransformInstanceTypes`<sup>Required</sup> <a name="supportedTransformInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmInferenceSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---


### SagemakerAlgorithmTagsList <a name="SagemakerAlgorithmTagsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTagsList;

new SagemakerAlgorithmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get"></a>

```java
public SagemakerAlgorithmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>>

---


### SagemakerAlgorithmTagsOutputReference <a name="SagemakerAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTagsOutputReference;

new SagemakerAlgorithmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>

---


### SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList;

new SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get"></a>

```java
public SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationMetricDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>>

---


### SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference;

new SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationMetricDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>

---


### SagemakerAlgorithmTrainingSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationOutputReference;

new SagemakerAlgorithmTrainingSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions">putMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters">putSupportedHyperParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics">putSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels">putTrainingChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetMetricDefinitions">resetMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedHyperParameters">resetSupportedHyperParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedTuningJobObjectiveMetrics">resetSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportsDistributedTraining">resetSupportsDistributedTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetTrainingImageDigest">resetTrainingImageDigest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinitions` <a name="putMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions"></a>

```java
public void putMetricDefinitions(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationMetricDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>>

---

##### `putSupportedHyperParameters` <a name="putSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters"></a>

```java
public void putSupportedHyperParameters(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>>

---

##### `putSupportedTuningJobObjectiveMetrics` <a name="putSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics"></a>

```java
public void putSupportedTuningJobObjectiveMetrics(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>>

---

##### `putTrainingChannels` <a name="putTrainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels"></a>

```java
public void putTrainingChannels(IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationTrainingChannels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>>

---

##### `resetMetricDefinitions` <a name="resetMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetMetricDefinitions"></a>

```java
public void resetMetricDefinitions()
```

##### `resetSupportedHyperParameters` <a name="resetSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedHyperParameters"></a>

```java
public void resetSupportedHyperParameters()
```

##### `resetSupportedTuningJobObjectiveMetrics` <a name="resetSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedTuningJobObjectiveMetrics"></a>

```java
public void resetSupportedTuningJobObjectiveMetrics()
```

##### `resetSupportsDistributedTraining` <a name="resetSupportsDistributedTraining" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportsDistributedTraining"></a>

```java
public void resetSupportsDistributedTraining()
```

##### `resetTrainingImageDigest` <a name="resetTrainingImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetTrainingImageDigest"></a>

```java
public void resetTrainingImageDigest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters">supportedHyperParameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics">supportedTuningJobObjectiveMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels">trainingChannels</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList">SagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitionsInput">metricDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParametersInput">supportedHyperParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypesInput">supportedTrainingInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetricsInput">supportedTuningJobObjectiveMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTrainingInput">supportsDistributedTrainingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannelsInput">trainingChannelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigestInput">trainingImageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageInput">trainingImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes">supportedTrainingInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining">supportsDistributedTraining</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage">trainingImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest">trainingImageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions"></a>

```java
public SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList getMetricDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a>

---

##### `supportedHyperParameters`<sup>Required</sup> <a name="supportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList getSupportedHyperParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a>

---

##### `supportedTuningJobObjectiveMetrics`<sup>Required</sup> <a name="supportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList getSupportedTuningJobObjectiveMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a>

---

##### `trainingChannels`<sup>Required</sup> <a name="trainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels"></a>

```java
public SagemakerAlgorithmTrainingSpecificationTrainingChannelsList getTrainingChannels();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList">SagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a>

---

##### `metricDefinitionsInput`<sup>Optional</sup> <a name="metricDefinitionsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitionsInput"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationMetricDefinitions> getMetricDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>>

---

##### `supportedHyperParametersInput`<sup>Optional</sup> <a name="supportedHyperParametersInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParametersInput"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters> getSupportedHyperParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>>

---

##### `supportedTrainingInstanceTypesInput`<sup>Optional</sup> <a name="supportedTrainingInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedTrainingInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTuningJobObjectiveMetricsInput`<sup>Optional</sup> <a name="supportedTuningJobObjectiveMetricsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetricsInput"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics> getSupportedTuningJobObjectiveMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>>

---

##### `supportsDistributedTrainingInput`<sup>Optional</sup> <a name="supportsDistributedTrainingInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTrainingInput"></a>

```java
public java.lang.Boolean|IResolvable getSupportsDistributedTrainingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `trainingChannelsInput`<sup>Optional</sup> <a name="trainingChannelsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannelsInput"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationTrainingChannels> getTrainingChannelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>>

---

##### `trainingImageDigestInput`<sup>Optional</sup> <a name="trainingImageDigestInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigestInput"></a>

```java
public java.lang.String getTrainingImageDigestInput();
```

- *Type:* java.lang.String

---

##### `trainingImageInput`<sup>Optional</sup> <a name="trainingImageInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageInput"></a>

```java
public java.lang.String getTrainingImageInput();
```

- *Type:* java.lang.String

---

##### `supportedTrainingInstanceTypes`<sup>Required</sup> <a name="supportedTrainingInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedTrainingInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportsDistributedTraining`<sup>Required</sup> <a name="supportsDistributedTraining" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining"></a>

```java
public java.lang.Boolean|IResolvable getSupportsDistributedTraining();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `trainingImage`<sup>Required</sup> <a name="trainingImage" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage"></a>

```java
public java.lang.String getTrainingImage();
```

- *Type:* java.lang.String

---

##### `trainingImageDigest`<sup>Required</sup> <a name="trainingImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest"></a>

```java
public java.lang.String getTrainingImageDigest();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList;

new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference;

new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsTunable">resetIsTunable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange"></a>

```java
public void putRange(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetIsTunable` <a name="resetIsTunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsTunable"></a>

```java
public void resetIsTunable()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRange` <a name="resetRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunableInput">isTunableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.rangeInput">rangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable">isTunable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isTunableInput`<sup>Optional</sup> <a name="isTunableInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunableInput"></a>

```java
public java.lang.Boolean|IResolvable getIsTunableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.rangeInput"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange getRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isTunable`<sup>Required</sup> <a name="isTunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable"></a>

```java
public java.lang.Boolean|IResolvable getIsTunable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference;

new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference;

new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMaxValue"></a>

```java
public void resetMaxValue()
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMinValue"></a>

```java
public void resetMinValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValueInput">minValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValueInput"></a>

```java
public java.lang.String getMaxValueInput();
```

- *Type:* java.lang.String

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValueInput"></a>

```java
public java.lang.String getMinValueInput();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference;

new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMaxValue"></a>

```java
public void resetMaxValue()
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMinValue"></a>

```java
public void resetMinValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValueInput">minValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValueInput"></a>

```java
public java.lang.String getMaxValueInput();
```

- *Type:* java.lang.String

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValueInput"></a>

```java
public java.lang.String getMinValueInput();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference;

new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification">putCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification">putContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification">putIntegerParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetCategoricalParameterRangeSpecification">resetCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetContinuousParameterRangeSpecification">resetContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetIntegerParameterRangeSpecification">resetIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCategoricalParameterRangeSpecification` <a name="putCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification"></a>

```java
public void putCategoricalParameterRangeSpecification(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---

##### `putContinuousParameterRangeSpecification` <a name="putContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification"></a>

```java
public void putContinuousParameterRangeSpecification(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---

##### `putIntegerParameterRangeSpecification` <a name="putIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification"></a>

```java
public void putIntegerParameterRangeSpecification(SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---

##### `resetCategoricalParameterRangeSpecification` <a name="resetCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetCategoricalParameterRangeSpecification"></a>

```java
public void resetCategoricalParameterRangeSpecification()
```

##### `resetContinuousParameterRangeSpecification` <a name="resetContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetContinuousParameterRangeSpecification"></a>

```java
public void resetContinuousParameterRangeSpecification()
```

##### `resetIntegerParameterRangeSpecification` <a name="resetIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetIntegerParameterRangeSpecification"></a>

```java
public void resetIntegerParameterRangeSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification">categoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification">continuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification">integerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecificationInput">categoricalParameterRangeSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecificationInput">continuousParameterRangeSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecificationInput">integerParameterRangeSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoricalParameterRangeSpecification`<sup>Required</sup> <a name="categoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference getCategoricalParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a>

---

##### `continuousParameterRangeSpecification`<sup>Required</sup> <a name="continuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference getContinuousParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a>

---

##### `integerParameterRangeSpecification`<sup>Required</sup> <a name="integerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference getIntegerParameterRangeSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a>

---

##### `categoricalParameterRangeSpecificationInput`<sup>Optional</sup> <a name="categoricalParameterRangeSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecificationInput"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification getCategoricalParameterRangeSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---

##### `continuousParameterRangeSpecificationInput`<sup>Optional</sup> <a name="continuousParameterRangeSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecificationInput"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification getContinuousParameterRangeSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---

##### `integerParameterRangeSpecificationInput`<sup>Optional</sup> <a name="integerParameterRangeSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecificationInput"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification getIntegerParameterRangeSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList;

new SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get"></a>

```java
public SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>>

---


### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference;

new SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>

---


### SagemakerAlgorithmTrainingSpecificationTrainingChannelsList <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannelsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList;

new SagemakerAlgorithmTrainingSpecificationTrainingChannelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get"></a>

```java
public SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAlgorithmTrainingSpecificationTrainingChannels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>>

---


### SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_algorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference;

new SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetSupportedCompressionTypes">resetSupportedCompressionTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetSupportedCompressionTypes` <a name="resetSupportedCompressionTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetSupportedCompressionTypes"></a>

```java
public void resetSupportedCompressionTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypesInput">supportedCompressionTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypesInput">supportedContentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModesInput">supportedInputModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes">supportedCompressionTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes">supportedInputModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `supportedCompressionTypesInput`<sup>Optional</sup> <a name="supportedCompressionTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedCompressionTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedContentTypesInput`<sup>Optional</sup> <a name="supportedContentTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedInputModesInput`<sup>Optional</sup> <a name="supportedInputModesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedInputModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `supportedCompressionTypes`<sup>Required</sup> <a name="supportedCompressionTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedCompressionTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedInputModes`<sup>Required</sup> <a name="supportedInputModes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes"></a>

```java
public java.util.List<java.lang.String> getSupportedInputModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAlgorithmTrainingSpecificationTrainingChannels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>

---



