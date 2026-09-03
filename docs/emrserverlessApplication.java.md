# `emrserverlessApplication` Submodule <a name="`emrserverlessApplication` Submodule" id="@cdktn/provider-awscc.emrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrserverlessApplication <a name="EmrserverlessApplication" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application awscc_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplication;

EmrserverlessApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .releaseLabel(java.lang.String)
    .type(java.lang.String)
//  .architecture(java.lang.String)
//  .autoStartConfiguration(EmrserverlessApplicationAutoStartConfiguration)
//  .autoStopConfiguration(EmrserverlessApplicationAutoStopConfiguration)
//  .imageConfiguration(EmrserverlessApplicationImageConfiguration)
//  .initialCapacity(IResolvable|java.util.List<EmrserverlessApplicationInitialCapacity>)
//  .maximumCapacity(EmrserverlessApplicationMaximumCapacity)
//  .name(java.lang.String)
//  .networkConfiguration(EmrserverlessApplicationNetworkConfiguration)
//  .tags(IResolvable|java.util.List<EmrserverlessApplicationTags>)
//  .workerTypeSpecifications(IResolvable|java.util.Map<java.lang.String, EmrserverlessApplicationWorkerTypeSpecifications>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | EMR release label. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.architecture">architecture</a></code> | <code>java.lang.String</code> | The cpu architecture of an application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStartConfiguration">autoStartConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | Configuration for Auto Start of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStopConfiguration">autoStopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | Configuration for Auto Stop of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | The image configuration. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.initialCapacity">initialCapacity</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>></code> | Initial capacity initialized when an Application is started. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.maximumCapacity">maximumCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | User friendly Application name. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | Network Configuration for customer VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>></code> | Tag map with key and value. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.workerTypeSpecifications">workerTypeSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>></code> | The key-value pairs that specify worker type to WorkerTypeSpecificationInput. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.releaseLabel"></a>

- *Type:* java.lang.String

EMR release label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.architecture"></a>

- *Type:* java.lang.String

The cpu architecture of an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}

---

##### `autoStartConfiguration`<sup>Optional</sup> <a name="autoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStartConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

Configuration for Auto Start of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `autoStopConfiguration`<sup>Optional</sup> <a name="autoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStopConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

Configuration for Auto Stop of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.imageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

The image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

##### `initialCapacity`<sup>Optional</sup> <a name="initialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.initialCapacity"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>>

Initial capacity initialized when an Application is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `maximumCapacity`<sup>Optional</sup> <a name="maximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.maximumCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

User friendly Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

Network Configuration for customer VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>>

Tag map with key and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}

---

##### `workerTypeSpecifications`<sup>Optional</sup> <a name="workerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.workerTypeSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>>

The key-value pairs that specify worker type to WorkerTypeSpecificationInput.

This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#worker_type_specifications EmrserverlessApplication#worker_type_specifications}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration">putAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration">putAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration">putImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity">putInitialCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity">putMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putWorkerTypeSpecifications">putWorkerTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration">resetAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration">resetAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration">resetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity">resetInitialCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity">resetMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetWorkerTypeSpecifications">resetWorkerTypeSpecifications</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoStartConfiguration` <a name="putAutoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration"></a>

```java
public void putAutoStartConfiguration(EmrserverlessApplicationAutoStartConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `putAutoStopConfiguration` <a name="putAutoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration"></a>

```java
public void putAutoStopConfiguration(EmrserverlessApplicationAutoStopConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `putImageConfiguration` <a name="putImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration"></a>

```java
public void putImageConfiguration(EmrserverlessApplicationImageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `putInitialCapacity` <a name="putInitialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity"></a>

```java
public void putInitialCapacity(IResolvable|java.util.List<EmrserverlessApplicationInitialCapacity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>>

---

##### `putMaximumCapacity` <a name="putMaximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity"></a>

```java
public void putMaximumCapacity(EmrserverlessApplicationMaximumCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(EmrserverlessApplicationNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EmrserverlessApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>>

---

##### `putWorkerTypeSpecifications` <a name="putWorkerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putWorkerTypeSpecifications"></a>

```java
public void putWorkerTypeSpecifications(IResolvable|java.util.Map<java.lang.String, EmrserverlessApplicationWorkerTypeSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putWorkerTypeSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>>

---

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetArchitecture"></a>

```java
public void resetArchitecture()
```

##### `resetAutoStartConfiguration` <a name="resetAutoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration"></a>

```java
public void resetAutoStartConfiguration()
```

##### `resetAutoStopConfiguration` <a name="resetAutoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration"></a>

```java
public void resetAutoStopConfiguration()
```

##### `resetImageConfiguration` <a name="resetImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration"></a>

```java
public void resetImageConfiguration()
```

##### `resetInitialCapacity` <a name="resetInitialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity"></a>

```java
public void resetInitialCapacity()
```

##### `resetMaximumCapacity` <a name="resetMaximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity"></a>

```java
public void resetMaximumCapacity()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkerTypeSpecifications` <a name="resetWorkerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetWorkerTypeSpecifications"></a>

```java
public void resetWorkerTypeSpecifications()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmrserverlessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplication;

EmrserverlessApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplication;

EmrserverlessApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplication;

EmrserverlessApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplication;

EmrserverlessApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmrserverlessApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EmrserverlessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmrserverlessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmrserverlessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EmrserverlessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration">autoStartConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration">autoStopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity">initialCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity">maximumCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList">EmrserverlessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecifications">workerTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap">EmrserverlessApplicationWorkerTypeSpecificationsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput">autoStartConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput">autoStopConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput">imageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput">initialCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput">maximumCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput">releaseLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecificationsInput">workerTypeSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoStartConfiguration`<sup>Required</sup> <a name="autoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration"></a>

```java
public EmrserverlessApplicationAutoStartConfigurationOutputReference getAutoStartConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `autoStopConfiguration`<sup>Required</sup> <a name="autoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration"></a>

```java
public EmrserverlessApplicationAutoStopConfigurationOutputReference getAutoStopConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration"></a>

```java
public EmrserverlessApplicationImageConfigurationOutputReference getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `initialCapacity`<sup>Required</sup> <a name="initialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity"></a>

```java
public EmrserverlessApplicationInitialCapacityList getInitialCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a>

---

##### `maximumCapacity`<sup>Required</sup> <a name="maximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity"></a>

```java
public EmrserverlessApplicationMaximumCapacityOutputReference getMaximumCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration"></a>

```java
public EmrserverlessApplicationNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tags"></a>

```java
public EmrserverlessApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList">EmrserverlessApplicationTagsList</a>

---

##### `workerTypeSpecifications`<sup>Required</sup> <a name="workerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecifications"></a>

```java
public EmrserverlessApplicationWorkerTypeSpecificationsMap getWorkerTypeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap">EmrserverlessApplicationWorkerTypeSpecificationsMap</a>

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `autoStartConfigurationInput`<sup>Optional</sup> <a name="autoStartConfigurationInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput"></a>

```java
public IResolvable|EmrserverlessApplicationAutoStartConfiguration getAutoStartConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `autoStopConfigurationInput`<sup>Optional</sup> <a name="autoStopConfigurationInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput"></a>

```java
public IResolvable|EmrserverlessApplicationAutoStopConfiguration getAutoStopConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `imageConfigurationInput`<sup>Optional</sup> <a name="imageConfigurationInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput"></a>

```java
public IResolvable|EmrserverlessApplicationImageConfiguration getImageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `initialCapacityInput`<sup>Optional</sup> <a name="initialCapacityInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput"></a>

```java
public IResolvable|java.util.List<EmrserverlessApplicationInitialCapacity> getInitialCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>>

---

##### `maximumCapacityInput`<sup>Optional</sup> <a name="maximumCapacityInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput"></a>

```java
public IResolvable|EmrserverlessApplicationMaximumCapacity getMaximumCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput"></a>

```java
public IResolvable|EmrserverlessApplicationNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput"></a>

```java
public java.lang.String getReleaseLabelInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EmrserverlessApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `workerTypeSpecificationsInput`<sup>Optional</sup> <a name="workerTypeSpecificationsInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecificationsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, EmrserverlessApplicationWorkerTypeSpecifications> getWorkerTypeSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>>

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrserverlessApplicationAutoStartConfiguration <a name="EmrserverlessApplicationAutoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationAutoStartConfiguration;

EmrserverlessApplicationAutoStartConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the Application will automatically start. Defaults to true. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the Application will automatically start. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}

---

### EmrserverlessApplicationAutoStopConfiguration <a name="EmrserverlessApplicationAutoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationAutoStopConfiguration;

EmrserverlessApplicationAutoStopConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .idleTimeoutMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the Application will automatically stop after being idle. Defaults to true. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes">idleTimeoutMinutes</a></code> | <code>java.lang.Number</code> | The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the Application will automatically stop after being idle. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}

---

##### `idleTimeoutMinutes`<sup>Optional</sup> <a name="idleTimeoutMinutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes"></a>

```java
public java.lang.Number getIdleTimeoutMinutes();
```

- *Type:* java.lang.Number

The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}

---

### EmrserverlessApplicationConfig <a name="EmrserverlessApplicationConfig" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationConfig;

EmrserverlessApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .releaseLabel(java.lang.String)
    .type(java.lang.String)
//  .architecture(java.lang.String)
//  .autoStartConfiguration(EmrserverlessApplicationAutoStartConfiguration)
//  .autoStopConfiguration(EmrserverlessApplicationAutoStopConfiguration)
//  .imageConfiguration(EmrserverlessApplicationImageConfiguration)
//  .initialCapacity(IResolvable|java.util.List<EmrserverlessApplicationInitialCapacity>)
//  .maximumCapacity(EmrserverlessApplicationMaximumCapacity)
//  .name(java.lang.String)
//  .networkConfiguration(EmrserverlessApplicationNetworkConfiguration)
//  .tags(IResolvable|java.util.List<EmrserverlessApplicationTags>)
//  .workerTypeSpecifications(IResolvable|java.util.Map<java.lang.String, EmrserverlessApplicationWorkerTypeSpecifications>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | EMR release label. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture">architecture</a></code> | <code>java.lang.String</code> | The cpu architecture of an application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration">autoStartConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | Configuration for Auto Start of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration">autoStopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | Configuration for Auto Stop of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | The image configuration. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity">initialCapacity</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>></code> | Initial capacity initialized when an Application is started. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity">maximumCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | User friendly Application name. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | Network Configuration for customer VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>></code> | Tag map with key and value. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.workerTypeSpecifications">workerTypeSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>></code> | The key-value pairs that specify worker type to WorkerTypeSpecificationInput. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

EMR release label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

The cpu architecture of an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}

---

##### `autoStartConfiguration`<sup>Optional</sup> <a name="autoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration"></a>

```java
public EmrserverlessApplicationAutoStartConfiguration getAutoStartConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

Configuration for Auto Start of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `autoStopConfiguration`<sup>Optional</sup> <a name="autoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration"></a>

```java
public EmrserverlessApplicationAutoStopConfiguration getAutoStopConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

Configuration for Auto Stop of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration"></a>

```java
public EmrserverlessApplicationImageConfiguration getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

The image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

##### `initialCapacity`<sup>Optional</sup> <a name="initialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity"></a>

```java
public IResolvable|java.util.List<EmrserverlessApplicationInitialCapacity> getInitialCapacity();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>>

Initial capacity initialized when an Application is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `maximumCapacity`<sup>Optional</sup> <a name="maximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity"></a>

```java
public EmrserverlessApplicationMaximumCapacity getMaximumCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

User friendly Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration"></a>

```java
public EmrserverlessApplicationNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

Network Configuration for customer VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EmrserverlessApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>>

Tag map with key and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}

---

##### `workerTypeSpecifications`<sup>Optional</sup> <a name="workerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.workerTypeSpecifications"></a>

```java
public IResolvable|java.util.Map<java.lang.String, EmrserverlessApplicationWorkerTypeSpecifications> getWorkerTypeSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>>

The key-value pairs that specify worker type to WorkerTypeSpecificationInput.

This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#worker_type_specifications EmrserverlessApplication#worker_type_specifications}

---

### EmrserverlessApplicationImageConfiguration <a name="EmrserverlessApplicationImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationImageConfiguration;

EmrserverlessApplicationImageConfiguration.builder()
//  .imageUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The URI of an image in the Amazon ECR registry. |

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The URI of an image in the Amazon ECR registry.

This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}

---

### EmrserverlessApplicationInitialCapacity <a name="EmrserverlessApplicationInitialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacity;

EmrserverlessApplicationInitialCapacity.builder()
//  .key(java.lang.String)
//  .value(EmrserverlessApplicationInitialCapacityValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.key">key</a></code> | <code>java.lang.String</code> | Worker type for an analytics framework. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Worker type for an analytics framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#key EmrserverlessApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.value"></a>

```java
public EmrserverlessApplicationInitialCapacityValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}.

---

### EmrserverlessApplicationInitialCapacityValue <a name="EmrserverlessApplicationInitialCapacityValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacityValue;

EmrserverlessApplicationInitialCapacityValue.builder()
//  .workerConfiguration(EmrserverlessApplicationInitialCapacityValueWorkerConfiguration)
//  .workerCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | Initial count of workers to be initialized when an Application is started. |

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerConfiguration"></a>

```java
public EmrserverlessApplicationInitialCapacityValueWorkerConfiguration getWorkerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}.

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

Initial count of workers to be initialized when an Application is started.

This count will be continued to be maintained until the Application is stopped

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}

---

### EmrserverlessApplicationInitialCapacityValueWorkerConfiguration <a name="EmrserverlessApplicationInitialCapacityValueWorkerConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration;

EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.builder()
//  .cpu(java.lang.String)
//  .disk(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.disk">disk</a></code> | <code>java.lang.String</code> | Per worker Disk resource. GB is the only supported unit and specifying GB is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.memory">memory</a></code> | <code>java.lang.String</code> | Per worker memory resource. GB is the only supported unit and specifying GB is optional. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

Per worker Disk resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Per worker memory resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}

---

### EmrserverlessApplicationMaximumCapacity <a name="EmrserverlessApplicationMaximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationMaximumCapacity;

EmrserverlessApplicationMaximumCapacity.builder()
//  .cpu(java.lang.String)
//  .disk(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk">disk</a></code> | <code>java.lang.String</code> | Per worker Disk resource. GB is the only supported unit and specifying GB is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory">memory</a></code> | <code>java.lang.String</code> | Per worker memory resource. GB is the only supported unit and specifying GB is optional. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

Per worker Disk resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Per worker memory resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}

---

### EmrserverlessApplicationNetworkConfiguration <a name="EmrserverlessApplicationNetworkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationNetworkConfiguration;

EmrserverlessApplicationNetworkConfiguration.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the security groups in the VPC to which you want to connect your job or application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the subnets in the VPC to which you want to connect your job or application. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of the security groups in the VPC to which you want to connect your job or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of the subnets in the VPC to which you want to connect your job or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}

---

### EmrserverlessApplicationTags <a name="EmrserverlessApplicationTags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationTags;

EmrserverlessApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | The value for the tag. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#key EmrserverlessApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}

---

### EmrserverlessApplicationWorkerTypeSpecifications <a name="EmrserverlessApplicationWorkerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationWorkerTypeSpecifications;

EmrserverlessApplicationWorkerTypeSpecifications.builder()
//  .imageConfiguration(EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | The image configuration. |

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications.property.imageConfiguration"></a>

```java
public EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

The image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

### EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration <a name="EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration;

EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.builder()
//  .imageUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The URI of an image in the Amazon ECR registry. |

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The URI of an image in the Amazon ECR registry.

This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### EmrserverlessApplicationAutoStartConfigurationOutputReference <a name="EmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationAutoStartConfigurationOutputReference;

new EmrserverlessApplicationAutoStartConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationAutoStartConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---


### EmrserverlessApplicationAutoStopConfigurationOutputReference <a name="EmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationAutoStopConfigurationOutputReference;

new EmrserverlessApplicationAutoStopConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes">resetIdleTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIdleTimeoutMinutes` <a name="resetIdleTimeoutMinutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes"></a>

```java
public void resetIdleTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput">idleTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">idleTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idleTimeoutMinutesInput`<sup>Optional</sup> <a name="idleTimeoutMinutesInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idleTimeoutMinutes`<sup>Required</sup> <a name="idleTimeoutMinutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```java
public java.lang.Number getIdleTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationAutoStopConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---


### EmrserverlessApplicationImageConfigurationOutputReference <a name="EmrserverlessApplicationImageConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationImageConfigurationOutputReference;

new EmrserverlessApplicationImageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationImageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityList <a name="EmrserverlessApplicationInitialCapacityList" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacityList;

new EmrserverlessApplicationInitialCapacityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get"></a>

```java
public EmrserverlessApplicationInitialCapacityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EmrserverlessApplicationInitialCapacity> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>>

---


### EmrserverlessApplicationInitialCapacityOutputReference <a name="EmrserverlessApplicationInitialCapacityOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacityOutputReference;

new EmrserverlessApplicationInitialCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue"></a>

```java
public void putValue(EmrserverlessApplicationInitialCapacityValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference">EmrserverlessApplicationInitialCapacityValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.value"></a>

```java
public EmrserverlessApplicationInitialCapacityValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference">EmrserverlessApplicationInitialCapacityValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.valueInput"></a>

```java
public IResolvable|EmrserverlessApplicationInitialCapacityValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationInitialCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>

---


### EmrserverlessApplicationInitialCapacityValueOutputReference <a name="EmrserverlessApplicationInitialCapacityValueOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacityValueOutputReference;

new EmrserverlessApplicationInitialCapacityValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration">putWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerConfiguration">resetWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkerConfiguration` <a name="putWorkerConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration"></a>

```java
public void putWorkerConfiguration(EmrserverlessApplicationInitialCapacityValueWorkerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---

##### `resetWorkerConfiguration` <a name="resetWorkerConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerConfiguration"></a>

```java
public void resetWorkerConfiguration()
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerCount"></a>

```java
public void resetWorkerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfigurationInput">workerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration"></a>

```java
public EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference getWorkerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a>

---

##### `workerConfigurationInput`<sup>Optional</sup> <a name="workerConfigurationInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfigurationInput"></a>

```java
public IResolvable|EmrserverlessApplicationInitialCapacityValueWorkerConfiguration getWorkerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCountInput"></a>

```java
public java.lang.Number getWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationInitialCapacityValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

---


### EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference <a name="EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference;

new EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetDisk` <a name="resetDisk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.diskInput">diskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk">disk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.diskInput"></a>

```java
public java.lang.String getDiskInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationInitialCapacityValueWorkerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---


### EmrserverlessApplicationMaximumCapacityOutputReference <a name="EmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationMaximumCapacityOutputReference;

new EmrserverlessApplicationMaximumCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetDisk` <a name="resetDisk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput">diskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk">disk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput"></a>

```java
public java.lang.String getDiskInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationMaximumCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---


### EmrserverlessApplicationNetworkConfigurationOutputReference <a name="EmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationNetworkConfigurationOutputReference;

new EmrserverlessApplicationNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---


### EmrserverlessApplicationTagsList <a name="EmrserverlessApplicationTagsList" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationTagsList;

new EmrserverlessApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.get"></a>

```java
public EmrserverlessApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EmrserverlessApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>>

---


### EmrserverlessApplicationTagsOutputReference <a name="EmrserverlessApplicationTagsOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationTagsOutputReference;

new EmrserverlessApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>

---


### EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference <a name="EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference;

new EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---


### EmrserverlessApplicationWorkerTypeSpecificationsMap <a name="EmrserverlessApplicationWorkerTypeSpecificationsMap" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationWorkerTypeSpecificationsMap;

new EmrserverlessApplicationWorkerTypeSpecificationsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.get"></a>

```java
public EmrserverlessApplicationWorkerTypeSpecificationsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, EmrserverlessApplicationWorkerTypeSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>>

---


### EmrserverlessApplicationWorkerTypeSpecificationsOutputReference <a name="EmrserverlessApplicationWorkerTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emrserverless_application.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference;

new EmrserverlessApplicationWorkerTypeSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.putImageConfiguration">putImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resetImageConfiguration">resetImageConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImageConfiguration` <a name="putImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.putImageConfiguration"></a>

```java
public void putImageConfiguration(EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---

##### `resetImageConfiguration` <a name="resetImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resetImageConfiguration"></a>

```java
public void resetImageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfigurationInput">imageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration"></a>

```java
public EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a>

---

##### `imageConfigurationInput`<sup>Optional</sup> <a name="imageConfigurationInput" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfigurationInput"></a>

```java
public IResolvable|EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration getImageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrserverlessApplicationWorkerTypeSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>

---



