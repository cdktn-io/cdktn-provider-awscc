# `batchComputeEnvironment` Submodule <a name="`batchComputeEnvironment` Submodule" id="@cdktn/provider-awscc.batchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchComputeEnvironment <a name="BatchComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment awscc_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironment;

BatchComputeEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .computeEnvironmentName(java.lang.String)
//  .computeResources(BatchComputeEnvironmentComputeResources)
//  .context(java.lang.String)
//  .eksConfiguration(BatchComputeEnvironmentEksConfiguration)
//  .replaceComputeEnvironment(java.lang.Boolean|IResolvable)
//  .serviceRole(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .unmanagedvCpus(java.lang.Number)
//  .updatePolicy(BatchComputeEnvironmentUpdatePolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeEnvironmentName">computeEnvironmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeResources">computeResources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.replaceComputeEnvironment">replaceComputeEnvironment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.unmanagedvCpus">unmanagedvCpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `computeEnvironmentName`<sup>Optional</sup> <a name="computeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeEnvironmentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}.

---

##### `computeResources`<sup>Optional</sup> <a name="computeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}.

---

##### `eksConfiguration`<sup>Optional</sup> <a name="eksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.eksConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}.

---

##### `replaceComputeEnvironment`<sup>Optional</sup> <a name="replaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.replaceComputeEnvironment"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.serviceRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `unmanagedvCpus`<sup>Optional</sup> <a name="unmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.unmanagedvCpus"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}.

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources">putComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration">putEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeEnvironmentName">resetComputeEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources">resetComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration">resetEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetReplaceComputeEnvironment">resetReplaceComputeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole">resetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUnmanagedvCpus">resetUnmanagedvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeResources` <a name="putComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources"></a>

```java
public void putComputeResources(BatchComputeEnvironmentComputeResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `putEksConfiguration` <a name="putEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration"></a>

```java
public void putEksConfiguration(BatchComputeEnvironmentEksConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(BatchComputeEnvironmentUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `resetComputeEnvironmentName` <a name="resetComputeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeEnvironmentName"></a>

```java
public void resetComputeEnvironmentName()
```

##### `resetComputeResources` <a name="resetComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources"></a>

```java
public void resetComputeResources()
```

##### `resetContext` <a name="resetContext" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetContext"></a>

```java
public void resetContext()
```

##### `resetEksConfiguration` <a name="resetEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration"></a>

```java
public void resetEksConfiguration()
```

##### `resetReplaceComputeEnvironment` <a name="resetReplaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetReplaceComputeEnvironment"></a>

```java
public void resetReplaceComputeEnvironment()
```

##### `resetServiceRole` <a name="resetServiceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole"></a>

```java
public void resetServiceRole()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetUnmanagedvCpus` <a name="resetUnmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUnmanagedvCpus"></a>

```java
public void resetUnmanagedvCpus()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironment;

BatchComputeEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironment;

BatchComputeEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironment;

BatchComputeEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironment;

BatchComputeEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BatchComputeEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BatchComputeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentArn">computeEnvironmentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources">computeResources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentNameInput">computeEnvironmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput">computeResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput">eksConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironmentInput">replaceComputeEnvironmentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput">serviceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpusInput">unmanagedvCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput">updatePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironment">replaceComputeEnvironment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpus">unmanagedvCpus</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `computeEnvironmentArn`<sup>Required</sup> <a name="computeEnvironmentArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentArn"></a>

```java
public java.lang.String getComputeEnvironmentArn();
```

- *Type:* java.lang.String

---

##### `computeResources`<sup>Required</sup> <a name="computeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources"></a>

```java
public BatchComputeEnvironmentComputeResourcesOutputReference getComputeResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `eksConfiguration`<sup>Required</sup> <a name="eksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration"></a>

```java
public BatchComputeEnvironmentEksConfigurationOutputReference getEksConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy"></a>

```java
public BatchComputeEnvironmentUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `computeEnvironmentNameInput`<sup>Optional</sup> <a name="computeEnvironmentNameInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentNameInput"></a>

```java
public java.lang.String getComputeEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `computeResourcesInput`<sup>Optional</sup> <a name="computeResourcesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResources getComputeResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `eksConfigurationInput`<sup>Optional</sup> <a name="eksConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput"></a>

```java
public IResolvable|BatchComputeEnvironmentEksConfiguration getEksConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `replaceComputeEnvironmentInput`<sup>Optional</sup> <a name="replaceComputeEnvironmentInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironmentInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceComputeEnvironmentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput"></a>

```java
public java.lang.String getServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unmanagedvCpusInput`<sup>Optional</sup> <a name="unmanagedvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpusInput"></a>

```java
public java.lang.Number getUnmanagedvCpusInput();
```

- *Type:* java.lang.Number

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput"></a>

```java
public IResolvable|BatchComputeEnvironmentUpdatePolicy getUpdatePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentName"></a>

```java
public java.lang.String getComputeEnvironmentName();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `replaceComputeEnvironment`<sup>Required</sup> <a name="replaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironment"></a>

```java
public java.lang.Boolean|IResolvable getReplaceComputeEnvironment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unmanagedvCpus`<sup>Required</sup> <a name="unmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpus"></a>

```java
public java.lang.Number getUnmanagedvCpus();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BatchComputeEnvironmentComputeResources <a name="BatchComputeEnvironmentComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResources;

BatchComputeEnvironmentComputeResources.builder()
//  .allocationStrategy(java.lang.String)
//  .bidPercentage(java.lang.Number)
//  .capacityTags(java.util.Map<java.lang.String, java.lang.String>)
//  .desiredvCpus(java.lang.Number)
//  .ec2Configuration(IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesEc2Configuration>)
//  .ec2KeyPair(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceRole(java.lang.String)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .launchTemplate(BatchComputeEnvironmentComputeResourcesLaunchTemplate)
//  .managedInstancesProvider(BatchComputeEnvironmentComputeResourcesManagedInstancesProvider)
//  .maxvCpus(java.lang.Number)
//  .minvCpus(java.lang.Number)
//  .placementGroup(java.lang.String)
//  .scalingPolicy(BatchComputeEnvironmentComputeResourcesScalingPolicy)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .spotIamFleetRole(java.lang.String)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .updateToLatestImageVersion(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage">bidPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.capacityTags">capacityTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Capacity-level tags for compute environments. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredvCpus">desiredvCpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration">ec2Configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair">ec2KeyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole">instanceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.managedInstancesProvider">managedInstancesProvider</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#managed_instances_provider BatchComputeEnvironment#managed_instances_provider}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxvCpus">maxvCpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minvCpus">minvCpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole">spotIamFleetRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.updateToLatestImageVersion">updateToLatestImageVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}. |

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}.

---

##### `bidPercentage`<sup>Optional</sup> <a name="bidPercentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage"></a>

```java
public java.lang.Number getBidPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}.

---

##### `capacityTags`<sup>Optional</sup> <a name="capacityTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.capacityTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacityTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Capacity-level tags for compute environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#capacity_tags BatchComputeEnvironment#capacity_tags}

---

##### `desiredvCpus`<sup>Optional</sup> <a name="desiredvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredvCpus"></a>

```java
public java.lang.Number getDesiredvCpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}.

---

##### `ec2Configuration`<sup>Optional</sup> <a name="ec2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration"></a>

```java
public IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesEc2Configuration> getEc2Configuration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}.

---

##### `ec2KeyPair`<sup>Optional</sup> <a name="ec2KeyPair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair"></a>

```java
public java.lang.String getEc2KeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}.

---

##### `instanceRole`<sup>Optional</sup> <a name="instanceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole"></a>

```java
public java.lang.String getInstanceRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate"></a>

```java
public BatchComputeEnvironmentComputeResourcesLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}.

---

##### `managedInstancesProvider`<sup>Optional</sup> <a name="managedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.managedInstancesProvider"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProvider getManagedInstancesProvider();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#managed_instances_provider BatchComputeEnvironment#managed_instances_provider}.

---

##### `maxvCpus`<sup>Optional</sup> <a name="maxvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxvCpus"></a>

```java
public java.lang.Number getMaxvCpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}.

---

##### `minvCpus`<sup>Optional</sup> <a name="minvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minvCpus"></a>

```java
public java.lang.Number getMinvCpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.scalingPolicy"></a>

```java
public BatchComputeEnvironmentComputeResourcesScalingPolicy getScalingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}.

---

##### `spotIamFleetRole`<sup>Optional</sup> <a name="spotIamFleetRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole"></a>

```java
public java.lang.String getSpotIamFleetRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `updateToLatestImageVersion`<sup>Optional</sup> <a name="updateToLatestImageVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.updateToLatestImageVersion"></a>

```java
public java.lang.Boolean|IResolvable getUpdateToLatestImageVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}.

---

### BatchComputeEnvironmentComputeResourcesEc2Configuration <a name="BatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesEc2Configuration;

BatchComputeEnvironmentComputeResourcesEc2Configuration.builder()
//  .batchImageStatus(java.lang.String)
//  .imageIdOverride(java.lang.String)
//  .imageKubernetesVersion(java.lang.String)
//  .imageType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.batchImageStatus">batchImageStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride">imageIdOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageKubernetesVersion">imageKubernetesVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}. |

---

##### `batchImageStatus`<sup>Optional</sup> <a name="batchImageStatus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.batchImageStatus"></a>

```java
public java.lang.String getBatchImageStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}.

---

##### `imageIdOverride`<sup>Optional</sup> <a name="imageIdOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride"></a>

```java
public java.lang.String getImageIdOverride();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}.

---

##### `imageKubernetesVersion`<sup>Optional</sup> <a name="imageKubernetesVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageKubernetesVersion"></a>

```java
public java.lang.String getImageKubernetesVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesLaunchTemplate;

BatchComputeEnvironmentComputeResourcesLaunchTemplate.builder()
//  .launchTemplateId(java.lang.String)
//  .launchTemplateName(java.lang.String)
//  .overrides(IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides>)
//  .userdataType(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.overrides">overrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.userdataType">userdataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.overrides"></a>

```java
public IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides> getOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}.

---

##### `userdataType`<sup>Optional</sup> <a name="userdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.userdataType"></a>

```java
public java.lang.String getUserdataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides;

BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.builder()
//  .launchTemplateId(java.lang.String)
//  .launchTemplateName(java.lang.String)
//  .targetInstanceTypes(java.util.List<java.lang.String>)
//  .userdataType(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.targetInstanceTypes">targetInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.userdataType">userdataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `targetInstanceTypes`<sup>Optional</sup> <a name="targetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.targetInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getTargetInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}.

---

##### `userdataType`<sup>Optional</sup> <a name="userdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.userdataType"></a>

```java
public java.lang.String getUserdataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProvider <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider;

BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.builder()
//  .infrastructureOptimization(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization)
//  .infrastructureRoleArn(java.lang.String)
//  .instanceLaunchTemplate(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate)
//  .propagateTags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureOptimization">infrastructureOptimization</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#infrastructure_optimization BatchComputeEnvironment#infrastructure_optimization}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#infrastructure_role_arn BatchComputeEnvironment#infrastructure_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.instanceLaunchTemplate">instanceLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_launch_template BatchComputeEnvironment#instance_launch_template}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#propagate_tags BatchComputeEnvironment#propagate_tags}. |

---

##### `infrastructureOptimization`<sup>Optional</sup> <a name="infrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureOptimization"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization getInfrastructureOptimization();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#infrastructure_optimization BatchComputeEnvironment#infrastructure_optimization}.

---

##### `infrastructureRoleArn`<sup>Optional</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#infrastructure_role_arn BatchComputeEnvironment#infrastructure_role_arn}.

---

##### `instanceLaunchTemplate`<sup>Optional</sup> <a name="instanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.instanceLaunchTemplate"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate getInstanceLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_launch_template BatchComputeEnvironment#instance_launch_template}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#propagate_tags BatchComputeEnvironment#propagate_tags}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.builder()
//  .scaleInAfter(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.property.scaleInAfter">scaleInAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#scale_in_after BatchComputeEnvironment#scale_in_after}. |

---

##### `scaleInAfter`<sup>Optional</sup> <a name="scaleInAfter" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.property.scaleInAfter"></a>

```java
public java.lang.Number getScaleInAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#scale_in_after BatchComputeEnvironment#scale_in_after}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.builder()
//  .capacityOptionType(java.lang.String)
//  .capacityReservations(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations)
//  .ec2InstanceProfileArn(java.lang.String)
//  .fipsEnabled(java.lang.Boolean|IResolvable)
//  .instanceMetadataTagsPropagation(java.lang.Boolean|IResolvable)
//  .instanceRequirements(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements)
//  .localStorageConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration)
//  .monitoring(java.lang.String)
//  .networkConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration)
//  .storageConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityOptionType">capacityOptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#capacity_option_type BatchComputeEnvironment#capacity_option_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityReservations">capacityReservations</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#capacity_reservations BatchComputeEnvironment#capacity_reservations}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.ec2InstanceProfileArn">ec2InstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#ec_2_instance_profile_arn BatchComputeEnvironment#ec_2_instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#fips_enabled BatchComputeEnvironment#fips_enabled}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceMetadataTagsPropagation">instanceMetadataTagsPropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_metadata_tags_propagation BatchComputeEnvironment#instance_metadata_tags_propagation}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_requirements BatchComputeEnvironment#instance_requirements}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.localStorageConfiguration">localStorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#local_storage_configuration BatchComputeEnvironment#local_storage_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.monitoring">monitoring</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#monitoring BatchComputeEnvironment#monitoring}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#network_configuration BatchComputeEnvironment#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#storage_configuration BatchComputeEnvironment#storage_configuration}. |

---

##### `capacityOptionType`<sup>Optional</sup> <a name="capacityOptionType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityOptionType"></a>

```java
public java.lang.String getCapacityOptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#capacity_option_type BatchComputeEnvironment#capacity_option_type}.

---

##### `capacityReservations`<sup>Optional</sup> <a name="capacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.capacityReservations"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations getCapacityReservations();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#capacity_reservations BatchComputeEnvironment#capacity_reservations}.

---

##### `ec2InstanceProfileArn`<sup>Optional</sup> <a name="ec2InstanceProfileArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.ec2InstanceProfileArn"></a>

```java
public java.lang.String getEc2InstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#ec_2_instance_profile_arn BatchComputeEnvironment#ec_2_instance_profile_arn}.

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.fipsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#fips_enabled BatchComputeEnvironment#fips_enabled}.

---

##### `instanceMetadataTagsPropagation`<sup>Optional</sup> <a name="instanceMetadataTagsPropagation" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceMetadataTagsPropagation"></a>

```java
public java.lang.Boolean|IResolvable getInstanceMetadataTagsPropagation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_metadata_tags_propagation BatchComputeEnvironment#instance_metadata_tags_propagation}.

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.instanceRequirements"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements getInstanceRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#instance_requirements BatchComputeEnvironment#instance_requirements}.

---

##### `localStorageConfiguration`<sup>Optional</sup> <a name="localStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.localStorageConfiguration"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration getLocalStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#local_storage_configuration BatchComputeEnvironment#local_storage_configuration}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.monitoring"></a>

```java
public java.lang.String getMonitoring();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#monitoring BatchComputeEnvironment#monitoring}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.networkConfiguration"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#network_configuration BatchComputeEnvironment#network_configuration}.

---

##### `storageConfiguration`<sup>Optional</sup> <a name="storageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.property.storageConfiguration"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration getStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#storage_configuration BatchComputeEnvironment#storage_configuration}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.builder()
//  .reservationGroupArn(java.lang.String)
//  .reservationPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationGroupArn">reservationGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#reservation_group_arn BatchComputeEnvironment#reservation_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationPreference">reservationPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#reservation_preference BatchComputeEnvironment#reservation_preference}. |

---

##### `reservationGroupArn`<sup>Optional</sup> <a name="reservationGroupArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationGroupArn"></a>

```java
public java.lang.String getReservationGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#reservation_group_arn BatchComputeEnvironment#reservation_group_arn}.

---

##### `reservationPreference`<sup>Optional</sup> <a name="reservationPreference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.property.reservationPreference"></a>

```java
public java.lang.String getReservationPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#reservation_preference BatchComputeEnvironment#reservation_preference}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.builder()
//  .allowedInstanceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#allowed_instance_types BatchComputeEnvironment#allowed_instance_types}. |

---

##### `allowedInstanceTypes`<sup>Optional</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.property.allowedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#allowed_instance_types BatchComputeEnvironment#allowed_instance_types}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.builder()
//  .useLocalStorage(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.property.useLocalStorage">useLocalStorage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#use_local_storage BatchComputeEnvironment#use_local_storage}. |

---

##### `useLocalStorage`<sup>Optional</sup> <a name="useLocalStorage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.property.useLocalStorage"></a>

```java
public java.lang.Boolean|IResolvable getUseLocalStorage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#use_local_storage BatchComputeEnvironment#use_local_storage}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.builder()
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#security_groups BatchComputeEnvironment#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#security_groups BatchComputeEnvironment#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration;

BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.builder()
//  .storageSizeGiB(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.property.storageSizeGiB">storageSizeGiB</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#storage_size_gi_b BatchComputeEnvironment#storage_size_gi_b}. |

---

##### `storageSizeGiB`<sup>Optional</sup> <a name="storageSizeGiB" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.property.storageSizeGiB"></a>

```java
public java.lang.Number getStorageSizeGiB();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#storage_size_gi_b BatchComputeEnvironment#storage_size_gi_b}.

---

### BatchComputeEnvironmentComputeResourcesScalingPolicy <a name="BatchComputeEnvironmentComputeResourcesScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesScalingPolicy;

BatchComputeEnvironmentComputeResourcesScalingPolicy.builder()
//  .minScaleDownDelayMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.property.minScaleDownDelayMinutes">minScaleDownDelayMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}. |

---

##### `minScaleDownDelayMinutes`<sup>Optional</sup> <a name="minScaleDownDelayMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.property.minScaleDownDelayMinutes"></a>

```java
public java.lang.Number getMinScaleDownDelayMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}.

---

### BatchComputeEnvironmentConfig <a name="BatchComputeEnvironmentConfig" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentConfig;

BatchComputeEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .computeEnvironmentName(java.lang.String)
//  .computeResources(BatchComputeEnvironmentComputeResources)
//  .context(java.lang.String)
//  .eksConfiguration(BatchComputeEnvironmentEksConfiguration)
//  .replaceComputeEnvironment(java.lang.Boolean|IResolvable)
//  .serviceRole(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .unmanagedvCpus(java.lang.Number)
//  .updatePolicy(BatchComputeEnvironmentUpdatePolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources">computeResources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.context">context</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.replaceComputeEnvironment">replaceComputeEnvironment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.unmanagedvCpus">unmanagedvCpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `computeEnvironmentName`<sup>Optional</sup> <a name="computeEnvironmentName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeEnvironmentName"></a>

```java
public java.lang.String getComputeEnvironmentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}.

---

##### `computeResources`<sup>Optional</sup> <a name="computeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources"></a>

```java
public BatchComputeEnvironmentComputeResources getComputeResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}.

---

##### `eksConfiguration`<sup>Optional</sup> <a name="eksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration"></a>

```java
public BatchComputeEnvironmentEksConfiguration getEksConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}.

---

##### `replaceComputeEnvironment`<sup>Optional</sup> <a name="replaceComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.replaceComputeEnvironment"></a>

```java
public java.lang.Boolean|IResolvable getReplaceComputeEnvironment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `unmanagedvCpus`<sup>Optional</sup> <a name="unmanagedvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.unmanagedvCpus"></a>

```java
public java.lang.Number getUnmanagedvCpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}.

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy"></a>

```java
public BatchComputeEnvironmentUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}.

---

### BatchComputeEnvironmentEksConfiguration <a name="BatchComputeEnvironmentEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentEksConfiguration;

BatchComputeEnvironmentEksConfiguration.builder()
//  .eksClusterArn(java.lang.String)
//  .kubernetesNamespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn">eksClusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}. |

---

##### `eksClusterArn`<sup>Optional</sup> <a name="eksClusterArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn"></a>

```java
public java.lang.String getEksClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}.

---

##### `kubernetesNamespace`<sup>Optional</sup> <a name="kubernetesNamespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace"></a>

```java
public java.lang.String getKubernetesNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}.

---

### BatchComputeEnvironmentUpdatePolicy <a name="BatchComputeEnvironmentUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentUpdatePolicy;

BatchComputeEnvironmentUpdatePolicy.builder()
//  .jobExecutionTimeoutMinutes(java.lang.Number)
//  .terminateJobsOnUpdate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes">jobExecutionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate">terminateJobsOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}. |

---

##### `jobExecutionTimeoutMinutes`<sup>Optional</sup> <a name="jobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes"></a>

```java
public java.lang.Number getJobExecutionTimeoutMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}.

---

##### `terminateJobsOnUpdate`<sup>Optional</sup> <a name="terminateJobsOnUpdate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate"></a>

```java
public java.lang.Boolean|IResolvable getTerminateJobsOnUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList;

new BatchComputeEnvironmentComputeResourcesEc2ConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```java
public BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesEc2Configuration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>>

---


### BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference;

new BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetBatchImageStatus">resetBatchImageStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride">resetImageIdOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageKubernetesVersion">resetImageKubernetesVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType">resetImageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchImageStatus` <a name="resetBatchImageStatus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetBatchImageStatus"></a>

```java
public void resetBatchImageStatus()
```

##### `resetImageIdOverride` <a name="resetImageIdOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride"></a>

```java
public void resetImageIdOverride()
```

##### `resetImageKubernetesVersion` <a name="resetImageKubernetesVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageKubernetesVersion"></a>

```java
public void resetImageKubernetesVersion()
```

##### `resetImageType` <a name="resetImageType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType"></a>

```java
public void resetImageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatusInput">batchImageStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput">imageIdOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersionInput">imageKubernetesVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus">batchImageStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">imageIdOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion">imageKubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchImageStatusInput`<sup>Optional</sup> <a name="batchImageStatusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatusInput"></a>

```java
public java.lang.String getBatchImageStatusInput();
```

- *Type:* java.lang.String

---

##### `imageIdOverrideInput`<sup>Optional</sup> <a name="imageIdOverrideInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput"></a>

```java
public java.lang.String getImageIdOverrideInput();
```

- *Type:* java.lang.String

---

##### `imageKubernetesVersionInput`<sup>Optional</sup> <a name="imageKubernetesVersionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersionInput"></a>

```java
public java.lang.String getImageKubernetesVersionInput();
```

- *Type:* java.lang.String

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `batchImageStatus`<sup>Required</sup> <a name="batchImageStatus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus"></a>

```java
public java.lang.String getBatchImageStatus();
```

- *Type:* java.lang.String

---

##### `imageIdOverride`<sup>Required</sup> <a name="imageIdOverride" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```java
public java.lang.String getImageIdOverride();
```

- *Type:* java.lang.String

---

##### `imageKubernetesVersion`<sup>Required</sup> <a name="imageKubernetesVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion"></a>

```java
public java.lang.String getImageKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesEc2Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetUserdataType">resetUserdataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides"></a>

```java
public void putOverrides(IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>>

---

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```java
public void resetLaunchTemplateId()
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```java
public void resetLaunchTemplateName()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetUserdataType` <a name="resetUserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetUserdataType"></a>

```java
public void resetUserdataType()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overridesInput">overridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataTypeInput">userdataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType">userdataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides"></a>

```java
public BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a>

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```java
public java.lang.String getLaunchTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```java
public java.lang.String getLaunchTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overridesInput"></a>

```java
public IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides> getOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>>

---

##### `userdataTypeInput`<sup>Optional</sup> <a name="userdataTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataTypeInput"></a>

```java
public java.lang.String getUserdataTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

---

##### `userdataType`<sup>Required</sup> <a name="userdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType"></a>

```java
public java.lang.String getUserdataType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get"></a>

```java
public BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetTargetInstanceTypes">resetTargetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetUserdataType">resetUserdataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateId"></a>

```java
public void resetLaunchTemplateId()
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateName"></a>

```java
public void resetLaunchTemplateName()
```

##### `resetTargetInstanceTypes` <a name="resetTargetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetTargetInstanceTypes"></a>

```java
public void resetTargetInstanceTypes()
```

##### `resetUserdataType` <a name="resetUserdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetUserdataType"></a>

```java
public void resetUserdataType()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypesInput">targetInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataTypeInput">userdataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes">targetInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType">userdataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateIdInput"></a>

```java
public java.lang.String getLaunchTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateNameInput"></a>

```java
public java.lang.String getLaunchTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `targetInstanceTypesInput`<sup>Optional</sup> <a name="targetInstanceTypesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getTargetInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userdataTypeInput`<sup>Optional</sup> <a name="userdataTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataTypeInput"></a>

```java
public java.lang.String getUserdataTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

---

##### `targetInstanceTypes`<sup>Required</sup> <a name="targetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getTargetInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userdataType`<sup>Required</sup> <a name="userdataType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType"></a>

```java
public java.lang.String getUserdataType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resetScaleInAfter">resetScaleInAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleInAfter` <a name="resetScaleInAfter" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resetScaleInAfter"></a>

```java
public void resetScaleInAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfterInput">scaleInAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter">scaleInAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInAfterInput`<sup>Optional</sup> <a name="scaleInAfterInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfterInput"></a>

```java
public java.lang.Number getScaleInAfterInput();
```

- *Type:* java.lang.Number

---

##### `scaleInAfter`<sup>Required</sup> <a name="scaleInAfter" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter"></a>

```java
public java.lang.Number getScaleInAfter();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationGroupArn">resetReservationGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationPreference">resetReservationPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReservationGroupArn` <a name="resetReservationGroupArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationGroupArn"></a>

```java
public void resetReservationGroupArn()
```

##### `resetReservationPreference` <a name="resetReservationPreference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resetReservationPreference"></a>

```java
public void resetReservationPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArnInput">reservationGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreferenceInput">reservationPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn">reservationGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference">reservationPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reservationGroupArnInput`<sup>Optional</sup> <a name="reservationGroupArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArnInput"></a>

```java
public java.lang.String getReservationGroupArnInput();
```

- *Type:* java.lang.String

---

##### `reservationPreferenceInput`<sup>Optional</sup> <a name="reservationPreferenceInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreferenceInput"></a>

```java
public java.lang.String getReservationPreferenceInput();
```

- *Type:* java.lang.String

---

##### `reservationGroupArn`<sup>Required</sup> <a name="reservationGroupArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn"></a>

```java
public java.lang.String getReservationGroupArn();
```

- *Type:* java.lang.String

---

##### `reservationPreference`<sup>Required</sup> <a name="reservationPreference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference"></a>

```java
public java.lang.String getReservationPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes">resetAllowedInstanceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedInstanceTypes` <a name="resetAllowedInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```java
public void resetAllowedInstanceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">allowedInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedInstanceTypesInput`<sup>Optional</sup> <a name="allowedInstanceTypesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resetUseLocalStorage">resetUseLocalStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseLocalStorage` <a name="resetUseLocalStorage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resetUseLocalStorage"></a>

```java
public void resetUseLocalStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorageInput">useLocalStorageInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage">useLocalStorage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useLocalStorageInput`<sup>Optional</sup> <a name="useLocalStorageInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorageInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLocalStorageInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLocalStorage`<sup>Required</sup> <a name="useLocalStorage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage"></a>

```java
public java.lang.Boolean|IResolvable getUseLocalStorage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putCapacityReservations">putCapacityReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putInstanceRequirements">putInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putLocalStorageConfiguration">putLocalStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putStorageConfiguration">putStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityOptionType">resetCapacityOptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityReservations">resetCapacityReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetEc2InstanceProfileArn">resetEc2InstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceMetadataTagsPropagation">resetInstanceMetadataTagsPropagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceRequirements">resetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetLocalStorageConfiguration">resetLocalStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetStorageConfiguration">resetStorageConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservations` <a name="putCapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putCapacityReservations"></a>

```java
public void putCapacityReservations(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putCapacityReservations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---

##### `putInstanceRequirements` <a name="putInstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putInstanceRequirements"></a>

```java
public void putInstanceRequirements(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---

##### `putLocalStorageConfiguration` <a name="putLocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putLocalStorageConfiguration"></a>

```java
public void putLocalStorageConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putLocalStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---

##### `putStorageConfiguration` <a name="putStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putStorageConfiguration"></a>

```java
public void putStorageConfiguration(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.putStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---

##### `resetCapacityOptionType` <a name="resetCapacityOptionType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityOptionType"></a>

```java
public void resetCapacityOptionType()
```

##### `resetCapacityReservations` <a name="resetCapacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetCapacityReservations"></a>

```java
public void resetCapacityReservations()
```

##### `resetEc2InstanceProfileArn` <a name="resetEc2InstanceProfileArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetEc2InstanceProfileArn"></a>

```java
public void resetEc2InstanceProfileArn()
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetFipsEnabled"></a>

```java
public void resetFipsEnabled()
```

##### `resetInstanceMetadataTagsPropagation` <a name="resetInstanceMetadataTagsPropagation" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceMetadataTagsPropagation"></a>

```java
public void resetInstanceMetadataTagsPropagation()
```

##### `resetInstanceRequirements` <a name="resetInstanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetInstanceRequirements"></a>

```java
public void resetInstanceRequirements()
```

##### `resetLocalStorageConfiguration` <a name="resetLocalStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetLocalStorageConfiguration"></a>

```java
public void resetLocalStorageConfiguration()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetStorageConfiguration` <a name="resetStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resetStorageConfiguration"></a>

```java
public void resetStorageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations">capacityReservations</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration">localStorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionTypeInput">capacityOptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservationsInput">capacityReservationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArnInput">ec2InstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagationInput">instanceMetadataTagsPropagationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirementsInput">instanceRequirementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfigurationInput">localStorageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoringInput">monitoringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfigurationInput">storageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType">capacityOptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn">ec2InstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation">instanceMetadataTagsPropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring">monitoring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservations`<sup>Required</sup> <a name="capacityReservations" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference getCapacityReservations();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a>

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference getInstanceRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `localStorageConfiguration`<sup>Required</sup> <a name="localStorageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference getLocalStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a>

---

##### `storageConfiguration`<sup>Required</sup> <a name="storageConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference getStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a>

---

##### `capacityOptionTypeInput`<sup>Optional</sup> <a name="capacityOptionTypeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionTypeInput"></a>

```java
public java.lang.String getCapacityOptionTypeInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationsInput`<sup>Optional</sup> <a name="capacityReservationsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservationsInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations getCapacityReservationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---

##### `ec2InstanceProfileArnInput`<sup>Optional</sup> <a name="ec2InstanceProfileArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArnInput"></a>

```java
public java.lang.String getEc2InstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceMetadataTagsPropagationInput`<sup>Optional</sup> <a name="instanceMetadataTagsPropagationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagationInput"></a>

```java
public java.lang.Boolean|IResolvable getInstanceMetadataTagsPropagationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceRequirementsInput`<sup>Optional</sup> <a name="instanceRequirementsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirementsInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements getInstanceRequirementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---

##### `localStorageConfigurationInput`<sup>Optional</sup> <a name="localStorageConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfigurationInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration getLocalStorageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoringInput"></a>

```java
public java.lang.String getMonitoringInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfigurationInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---

##### `storageConfigurationInput`<sup>Optional</sup> <a name="storageConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfigurationInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration getStorageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---

##### `capacityOptionType`<sup>Required</sup> <a name="capacityOptionType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType"></a>

```java
public java.lang.String getCapacityOptionType();
```

- *Type:* java.lang.String

---

##### `ec2InstanceProfileArn`<sup>Required</sup> <a name="ec2InstanceProfileArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn"></a>

```java
public java.lang.String getEc2InstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceMetadataTagsPropagation`<sup>Required</sup> <a name="instanceMetadataTagsPropagation" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation"></a>

```java
public java.lang.Boolean|IResolvable getInstanceMetadataTagsPropagation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring"></a>

```java
public java.lang.String getMonitoring();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resetStorageSizeGiB">resetStorageSizeGiB</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageSizeGiB` <a name="resetStorageSizeGiB" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resetStorageSizeGiB"></a>

```java
public void resetStorageSizeGiB()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiBInput">storageSizeGiBInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB">storageSizeGiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageSizeGiBInput`<sup>Optional</sup> <a name="storageSizeGiBInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiBInput"></a>

```java
public java.lang.Number getStorageSizeGiBInput();
```

- *Type:* java.lang.Number

---

##### `storageSizeGiB`<sup>Required</sup> <a name="storageSizeGiB" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB"></a>

```java
public java.lang.Number getStorageSizeGiB();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---


### BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference <a name="BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference;

new BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInfrastructureOptimization">putInfrastructureOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInstanceLaunchTemplate">putInstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureOptimization">resetInfrastructureOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureRoleArn">resetInfrastructureRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInstanceLaunchTemplate">resetInstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfrastructureOptimization` <a name="putInfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInfrastructureOptimization"></a>

```java
public void putInfrastructureOptimization(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInfrastructureOptimization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---

##### `putInstanceLaunchTemplate` <a name="putInstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInstanceLaunchTemplate"></a>

```java
public void putInstanceLaunchTemplate(BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.putInstanceLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---

##### `resetInfrastructureOptimization` <a name="resetInfrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureOptimization"></a>

```java
public void resetInfrastructureOptimization()
```

##### `resetInfrastructureRoleArn` <a name="resetInfrastructureRoleArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInfrastructureRoleArn"></a>

```java
public void resetInfrastructureRoleArn()
```

##### `resetInstanceLaunchTemplate` <a name="resetInstanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetInstanceLaunchTemplate"></a>

```java
public void resetInstanceLaunchTemplate()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization">infrastructureOptimization</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate">instanceLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimizationInput">infrastructureOptimizationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArnInput">infrastructureRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplateInput">instanceLaunchTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `infrastructureOptimization`<sup>Required</sup> <a name="infrastructureOptimization" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference getInfrastructureOptimization();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a>

---

##### `instanceLaunchTemplate`<sup>Required</sup> <a name="instanceLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference getInstanceLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a>

---

##### `infrastructureOptimizationInput`<sup>Optional</sup> <a name="infrastructureOptimizationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimizationInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization getInfrastructureOptimizationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---

##### `infrastructureRoleArnInput`<sup>Optional</sup> <a name="infrastructureRoleArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArnInput"></a>

```java
public java.lang.String getInfrastructureRoleArnInput();
```

- *Type:* java.lang.String

---

##### `instanceLaunchTemplateInput`<sup>Optional</sup> <a name="instanceLaunchTemplateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplateInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate getInstanceLaunchTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProvider getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---


### BatchComputeEnvironmentComputeResourcesOutputReference <a name="BatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesOutputReference;

new BatchComputeEnvironmentComputeResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration">putEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putManagedInstancesProvider">putManagedInstancesProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy">putScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage">resetBidPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetCapacityTags">resetCapacityTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredvCpus">resetDesiredvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration">resetEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair">resetEc2KeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole">resetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetManagedInstancesProvider">resetManagedInstancesProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMaxvCpus">resetMaxvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinvCpus">resetMinvCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetScalingPolicy">resetScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole">resetSpotIamFleetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetUpdateToLatestImageVersion">resetUpdateToLatestImageVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEc2Configuration` <a name="putEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration"></a>

```java
public void putEc2Configuration(IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesEc2Configuration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(BatchComputeEnvironmentComputeResourcesLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `putManagedInstancesProvider` <a name="putManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putManagedInstancesProvider"></a>

```java
public void putManagedInstancesProvider(BatchComputeEnvironmentComputeResourcesManagedInstancesProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putManagedInstancesProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---

##### `putScalingPolicy` <a name="putScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy"></a>

```java
public void putScalingPolicy(BatchComputeEnvironmentComputeResourcesScalingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy"></a>

```java
public void resetAllocationStrategy()
```

##### `resetBidPercentage` <a name="resetBidPercentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage"></a>

```java
public void resetBidPercentage()
```

##### `resetCapacityTags` <a name="resetCapacityTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetCapacityTags"></a>

```java
public void resetCapacityTags()
```

##### `resetDesiredvCpus` <a name="resetDesiredvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredvCpus"></a>

```java
public void resetDesiredvCpus()
```

##### `resetEc2Configuration` <a name="resetEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration"></a>

```java
public void resetEc2Configuration()
```

##### `resetEc2KeyPair` <a name="resetEc2KeyPair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair"></a>

```java
public void resetEc2KeyPair()
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetInstanceRole` <a name="resetInstanceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole"></a>

```java
public void resetInstanceRole()
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceTypes"></a>

```java
public void resetInstanceTypes()
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate"></a>

```java
public void resetLaunchTemplate()
```

##### `resetManagedInstancesProvider` <a name="resetManagedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetManagedInstancesProvider"></a>

```java
public void resetManagedInstancesProvider()
```

##### `resetMaxvCpus` <a name="resetMaxvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMaxvCpus"></a>

```java
public void resetMaxvCpus()
```

##### `resetMinvCpus` <a name="resetMinvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinvCpus"></a>

```java
public void resetMinvCpus()
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup"></a>

```java
public void resetPlacementGroup()
```

##### `resetScalingPolicy` <a name="resetScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetScalingPolicy"></a>

```java
public void resetScalingPolicy()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSpotIamFleetRole` <a name="resetSpotIamFleetRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole"></a>

```java
public void resetSpotIamFleetRole()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUpdateToLatestImageVersion` <a name="resetUpdateToLatestImageVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetUpdateToLatestImageVersion"></a>

```java
public void resetUpdateToLatestImageVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider">managedInstancesProvider</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput">bidPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTagsInput">capacityTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpusInput">desiredvCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput">ec2ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput">ec2KeyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput">instanceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypesInput">instanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput">launchTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProviderInput">managedInstancesProviderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpusInput">maxvCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpusInput">minvCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput">placementGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicyInput">scalingPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput">spotIamFleetRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersionInput">updateToLatestImageVersionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">bidPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags">capacityTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus">desiredvCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">ec2KeyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">instanceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus">maxvCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus">minvCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">spotIamFleetRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion">updateToLatestImageVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ec2Configuration`<sup>Required</sup> <a name="ec2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```java
public BatchComputeEnvironmentComputeResourcesEc2ConfigurationList getEc2Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```java
public BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `managedInstancesProvider`<sup>Required</sup> <a name="managedInstancesProvider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider"></a>

```java
public BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference getManagedInstancesProvider();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">BatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a>

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy"></a>

```java
public BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference getScalingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a>

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `bidPercentageInput`<sup>Optional</sup> <a name="bidPercentageInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput"></a>

```java
public java.lang.Number getBidPercentageInput();
```

- *Type:* java.lang.Number

---

##### `capacityTagsInput`<sup>Optional</sup> <a name="capacityTagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacityTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `desiredvCpusInput`<sup>Optional</sup> <a name="desiredvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpusInput"></a>

```java
public java.lang.Number getDesiredvCpusInput();
```

- *Type:* java.lang.Number

---

##### `ec2ConfigurationInput`<sup>Optional</sup> <a name="ec2ConfigurationInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput"></a>

```java
public IResolvable|java.util.List<BatchComputeEnvironmentComputeResourcesEc2Configuration> getEc2ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>>

---

##### `ec2KeyPairInput`<sup>Optional</sup> <a name="ec2KeyPairInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput"></a>

```java
public java.lang.String getEc2KeyPairInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceRoleInput`<sup>Optional</sup> <a name="instanceRoleInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput"></a>

```java
public java.lang.String getInstanceRoleInput();
```

- *Type:* java.lang.String

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesLaunchTemplate getLaunchTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `managedInstancesProviderInput`<sup>Optional</sup> <a name="managedInstancesProviderInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProviderInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesManagedInstancesProvider getManagedInstancesProviderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesManagedInstancesProvider">BatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---

##### `maxvCpusInput`<sup>Optional</sup> <a name="maxvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpusInput"></a>

```java
public java.lang.Number getMaxvCpusInput();
```

- *Type:* java.lang.Number

---

##### `minvCpusInput`<sup>Optional</sup> <a name="minvCpusInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpusInput"></a>

```java
public java.lang.Number getMinvCpusInput();
```

- *Type:* java.lang.Number

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput"></a>

```java
public java.lang.String getPlacementGroupInput();
```

- *Type:* java.lang.String

---

##### `scalingPolicyInput`<sup>Optional</sup> <a name="scalingPolicyInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicyInput"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesScalingPolicy getScalingPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotIamFleetRoleInput`<sup>Optional</sup> <a name="spotIamFleetRoleInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput"></a>

```java
public java.lang.String getSpotIamFleetRoleInput();
```

- *Type:* java.lang.String

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `updateToLatestImageVersionInput`<sup>Optional</sup> <a name="updateToLatestImageVersionInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersionInput"></a>

```java
public java.lang.Boolean|IResolvable getUpdateToLatestImageVersionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `bidPercentage`<sup>Required</sup> <a name="bidPercentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```java
public java.lang.Number getBidPercentage();
```

- *Type:* java.lang.Number

---

##### `capacityTags`<sup>Required</sup> <a name="capacityTags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacityTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `desiredvCpus`<sup>Required</sup> <a name="desiredvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus"></a>

```java
public java.lang.Number getDesiredvCpus();
```

- *Type:* java.lang.Number

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```java
public java.lang.String getEc2KeyPair();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceRole`<sup>Required</sup> <a name="instanceRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```java
public java.lang.String getInstanceRole();
```

- *Type:* java.lang.String

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxvCpus`<sup>Required</sup> <a name="maxvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus"></a>

```java
public java.lang.Number getMaxvCpus();
```

- *Type:* java.lang.Number

---

##### `minvCpus`<sup>Required</sup> <a name="minvCpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus"></a>

```java
public java.lang.Number getMinvCpus();
```

- *Type:* java.lang.Number

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotIamFleetRole`<sup>Required</sup> <a name="spotIamFleetRole" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```java
public java.lang.String getSpotIamFleetRole();
```

- *Type:* java.lang.String

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateToLatestImageVersion`<sup>Required</sup> <a name="updateToLatestImageVersion" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion"></a>

```java
public java.lang.Boolean|IResolvable getUpdateToLatestImageVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---


### BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference <a name="BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference;

new BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resetMinScaleDownDelayMinutes">resetMinScaleDownDelayMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinScaleDownDelayMinutes` <a name="resetMinScaleDownDelayMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resetMinScaleDownDelayMinutes"></a>

```java
public void resetMinScaleDownDelayMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutesInput">minScaleDownDelayMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes">minScaleDownDelayMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minScaleDownDelayMinutesInput`<sup>Optional</sup> <a name="minScaleDownDelayMinutesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutesInput"></a>

```java
public java.lang.Number getMinScaleDownDelayMinutesInput();
```

- *Type:* java.lang.Number

---

##### `minScaleDownDelayMinutes`<sup>Required</sup> <a name="minScaleDownDelayMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes"></a>

```java
public java.lang.Number getMinScaleDownDelayMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentComputeResourcesScalingPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---


### BatchComputeEnvironmentEksConfigurationOutputReference <a name="BatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentEksConfigurationOutputReference;

new BatchComputeEnvironmentEksConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetEksClusterArn">resetEksClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetKubernetesNamespace">resetKubernetesNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEksClusterArn` <a name="resetEksClusterArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetEksClusterArn"></a>

```java
public void resetEksClusterArn()
```

##### `resetKubernetesNamespace` <a name="resetKubernetesNamespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetKubernetesNamespace"></a>

```java
public void resetKubernetesNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput">eksClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">eksClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eksClusterArnInput`<sup>Optional</sup> <a name="eksClusterArnInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput"></a>

```java
public java.lang.String getEksClusterArnInput();
```

- *Type:* java.lang.String

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput"></a>

```java
public java.lang.String getKubernetesNamespaceInput();
```

- *Type:* java.lang.String

---

##### `eksClusterArn`<sup>Required</sup> <a name="eksClusterArn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```java
public java.lang.String getEksClusterArn();
```

- *Type:* java.lang.String

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```java
public java.lang.String getKubernetesNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentEksConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---


### BatchComputeEnvironmentUpdatePolicyOutputReference <a name="BatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.batch_compute_environment.BatchComputeEnvironmentUpdatePolicyOutputReference;

new BatchComputeEnvironmentUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetJobExecutionTimeoutMinutes">resetJobExecutionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetTerminateJobsOnUpdate">resetTerminateJobsOnUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobExecutionTimeoutMinutes` <a name="resetJobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetJobExecutionTimeoutMinutes"></a>

```java
public void resetJobExecutionTimeoutMinutes()
```

##### `resetTerminateJobsOnUpdate` <a name="resetTerminateJobsOnUpdate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetTerminateJobsOnUpdate"></a>

```java
public void resetTerminateJobsOnUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput">jobExecutionTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput">terminateJobsOnUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">jobExecutionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">terminateJobsOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobExecutionTimeoutMinutesInput`<sup>Optional</sup> <a name="jobExecutionTimeoutMinutesInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput"></a>

```java
public java.lang.Number getJobExecutionTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `terminateJobsOnUpdateInput`<sup>Optional</sup> <a name="terminateJobsOnUpdateInput" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getTerminateJobsOnUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jobExecutionTimeoutMinutes`<sup>Required</sup> <a name="jobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```java
public java.lang.Number getJobExecutionTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `terminateJobsOnUpdate`<sup>Required</sup> <a name="terminateJobsOnUpdate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```java
public java.lang.Boolean|IResolvable getTerminateJobsOnUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|BatchComputeEnvironmentUpdatePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---



