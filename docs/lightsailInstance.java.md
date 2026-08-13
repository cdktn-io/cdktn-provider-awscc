# `lightsailInstance` Submodule <a name="`lightsailInstance` Submodule" id="@cdktn/provider-awscc.lightsailInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstance <a name="LightsailInstance" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance awscc_lightsail_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstance;

LightsailInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .blueprintId(java.lang.String)
    .bundleId(java.lang.String)
    .instanceName(java.lang.String)
//  .addOns(IResolvable|java.util.List<LightsailInstanceAddOns>)
//  .availabilityZone(java.lang.String)
//  .hardware(LightsailInstanceHardware)
//  .keyPairName(java.lang.String)
//  .location(LightsailInstanceLocation)
//  .networking(LightsailInstanceNetworking)
//  .state(LightsailInstanceState)
//  .tags(IResolvable|java.util.List<LightsailInstanceTags>)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.blueprintId">blueprintId</a></code> | <code>java.lang.String</code> | The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The names to use for your new Lightsail instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.addOns">addOns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>></code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | Hardware of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.keyPairName">keyPairName</a></code> | <code>java.lang.String</code> | The name of your key pair. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | Networking of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | Current State of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | A launch script you can create that configures a server with additional user data. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.blueprintId"></a>

- *Type:* java.lang.String

The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#blueprint_id LightsailInstance#blueprint_id}

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#bundle_id LightsailInstance#bundle_id}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

The names to use for your new Lightsail instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#instance_name LightsailInstance#instance_name}

---

##### `addOns`<sup>Optional</sup> <a name="addOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.addOns"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>>

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#add_ons LightsailInstance#add_ons}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#availability_zone LightsailInstance#availability_zone}

---

##### `hardware`<sup>Optional</sup> <a name="hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.hardware"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

Hardware of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#hardware LightsailInstance#hardware}

---

##### `keyPairName`<sup>Optional</sup> <a name="keyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.keyPairName"></a>

- *Type:* java.lang.String

The name of your key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#key_pair_name LightsailInstance#key_pair_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#location LightsailInstance#location}

---

##### `networking`<sup>Optional</sup> <a name="networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

Networking of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#networking LightsailInstance#networking}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.state"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

Current State of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#state LightsailInstance#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#tags LightsailInstance#tags}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

A launch script you can create that configures a server with additional user data.

For example, you might want to run apt-get -y update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#user_data LightsailInstance#user_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns">putAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware">putHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState">putState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAddOns">resetAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetHardware">resetHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetKeyPairName">resetKeyPairName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetNetworking">resetNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddOns` <a name="putAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns"></a>

```java
public void putAddOns(IResolvable|java.util.List<LightsailInstanceAddOns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>>

---

##### `putHardware` <a name="putHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware"></a>

```java
public void putHardware(LightsailInstanceHardware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation"></a>

```java
public void putLocation(LightsailInstanceLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking"></a>

```java
public void putNetworking(LightsailInstanceNetworking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

---

##### `putState` <a name="putState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState"></a>

```java
public void putState(LightsailInstanceState value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LightsailInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>>

---

##### `resetAddOns` <a name="resetAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAddOns"></a>

```java
public void resetAddOns()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetHardware` <a name="resetHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetHardware"></a>

```java
public void resetHardware()
```

##### `resetKeyPairName` <a name="resetKeyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetKeyPairName"></a>

```java
public void resetKeyPairName()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetNetworking` <a name="resetNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetNetworking"></a>

```java
public void resetNetworking()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserData` <a name="resetUserData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstance;

LightsailInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstance;

LightsailInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstance;

LightsailInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstance;

LightsailInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LightsailInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LightsailInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LightsailInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LightsailInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LightsailInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOns">addOns</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList">LightsailInstanceAddOnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference">LightsailInstanceHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.isStaticIp">isStaticIp</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference">LightsailInstanceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference">LightsailInstanceNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.sshKeyName">sshKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference">LightsailInstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.supportCode">supportCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList">LightsailInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOnsInput">addOnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintIdInput">blueprintIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardwareInput">hardwareInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairNameInput">keyPairNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networkingInput">networkingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.stateInput">stateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintId">blueprintId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairName">keyPairName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addOns`<sup>Required</sup> <a name="addOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOns"></a>

```java
public LightsailInstanceAddOnsList getAddOns();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList">LightsailInstanceAddOnsList</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardware"></a>

```java
public LightsailInstanceHardwareOutputReference getHardware();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference">LightsailInstanceHardwareOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isStaticIp`<sup>Required</sup> <a name="isStaticIp" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.isStaticIp"></a>

```java
public IResolvable getIsStaticIp();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.location"></a>

```java
public LightsailInstanceLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference">LightsailInstanceLocationOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networking"></a>

```java
public LightsailInstanceNetworkingOutputReference getNetworking();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference">LightsailInstanceNetworkingOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `sshKeyName`<sup>Required</sup> <a name="sshKeyName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.sshKeyName"></a>

```java
public java.lang.String getSshKeyName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.state"></a>

```java
public LightsailInstanceStateOutputReference getState();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference">LightsailInstanceStateOutputReference</a>

---

##### `supportCode`<sup>Required</sup> <a name="supportCode" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.supportCode"></a>

```java
public java.lang.String getSupportCode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tags"></a>

```java
public LightsailInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList">LightsailInstanceTagsList</a>

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `addOnsInput`<sup>Optional</sup> <a name="addOnsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOnsInput"></a>

```java
public IResolvable|java.util.List<LightsailInstanceAddOns> getAddOnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `blueprintIdInput`<sup>Optional</sup> <a name="blueprintIdInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintIdInput"></a>

```java
public java.lang.String getBlueprintIdInput();
```

- *Type:* java.lang.String

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `hardwareInput`<sup>Optional</sup> <a name="hardwareInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardwareInput"></a>

```java
public IResolvable|LightsailInstanceHardware getHardwareInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `keyPairNameInput`<sup>Optional</sup> <a name="keyPairNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairNameInput"></a>

```java
public java.lang.String getKeyPairNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.locationInput"></a>

```java
public IResolvable|LightsailInstanceLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networkingInput"></a>

```java
public IResolvable|LightsailInstanceNetworking getNetworkingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.stateInput"></a>

```java
public IResolvable|LightsailInstanceState getStateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LightsailInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintId"></a>

```java
public java.lang.String getBlueprintId();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `keyPairName`<sup>Required</sup> <a name="keyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairName"></a>

```java
public java.lang.String getKeyPairName();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstanceAddOns <a name="LightsailInstanceAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceAddOns;

LightsailInstanceAddOns.builder()
//  .addOnType(java.lang.String)
//  .autoSnapshotAddOnRequest(LightsailInstanceAddOnsAutoSnapshotAddOnRequest)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.addOnType">addOnType</a></code> | <code>java.lang.String</code> | The add-on type. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.autoSnapshotAddOnRequest">autoSnapshotAddOnRequest</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | An object that represents additional parameters when enabling or modifying the automatic snapshot add-on. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.status">status</a></code> | <code>java.lang.String</code> | Status of the Addon. |

---

##### `addOnType`<sup>Optional</sup> <a name="addOnType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.addOnType"></a>

```java
public java.lang.String getAddOnType();
```

- *Type:* java.lang.String

The add-on type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#add_on_type LightsailInstance#add_on_type}

---

##### `autoSnapshotAddOnRequest`<sup>Optional</sup> <a name="autoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.autoSnapshotAddOnRequest"></a>

```java
public LightsailInstanceAddOnsAutoSnapshotAddOnRequest getAutoSnapshotAddOnRequest();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

An object that represents additional parameters when enabling or modifying the automatic snapshot add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#auto_snapshot_add_on_request LightsailInstance#auto_snapshot_add_on_request}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of the Addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#status LightsailInstance#status}

---

### LightsailInstanceAddOnsAutoSnapshotAddOnRequest <a name="LightsailInstanceAddOnsAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest;

LightsailInstanceAddOnsAutoSnapshotAddOnRequest.builder()
//  .snapshotTimeOfDay(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay">snapshotTimeOfDay</a></code> | <code>java.lang.String</code> | The daily time when an automatic snapshot will be created. |

---

##### `snapshotTimeOfDay`<sup>Optional</sup> <a name="snapshotTimeOfDay" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay"></a>

```java
public java.lang.String getSnapshotTimeOfDay();
```

- *Type:* java.lang.String

The daily time when an automatic snapshot will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#snapshot_time_of_day LightsailInstance#snapshot_time_of_day}

---

### LightsailInstanceConfig <a name="LightsailInstanceConfig" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceConfig;

LightsailInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .blueprintId(java.lang.String)
    .bundleId(java.lang.String)
    .instanceName(java.lang.String)
//  .addOns(IResolvable|java.util.List<LightsailInstanceAddOns>)
//  .availabilityZone(java.lang.String)
//  .hardware(LightsailInstanceHardware)
//  .keyPairName(java.lang.String)
//  .location(LightsailInstanceLocation)
//  .networking(LightsailInstanceNetworking)
//  .state(LightsailInstanceState)
//  .tags(IResolvable|java.util.List<LightsailInstanceTags>)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.blueprintId">blueprintId</a></code> | <code>java.lang.String</code> | The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The names to use for your new Lightsail instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.addOns">addOns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>></code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | Hardware of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.keyPairName">keyPairName</a></code> | <code>java.lang.String</code> | The name of your key pair. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | Networking of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | Current State of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | A launch script you can create that configures a server with additional user data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.blueprintId"></a>

```java
public java.lang.String getBlueprintId();
```

- *Type:* java.lang.String

The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#blueprint_id LightsailInstance#blueprint_id}

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#bundle_id LightsailInstance#bundle_id}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

The names to use for your new Lightsail instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#instance_name LightsailInstance#instance_name}

---

##### `addOns`<sup>Optional</sup> <a name="addOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.addOns"></a>

```java
public IResolvable|java.util.List<LightsailInstanceAddOns> getAddOns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>>

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#add_ons LightsailInstance#add_ons}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#availability_zone LightsailInstance#availability_zone}

---

##### `hardware`<sup>Optional</sup> <a name="hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.hardware"></a>

```java
public LightsailInstanceHardware getHardware();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

Hardware of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#hardware LightsailInstance#hardware}

---

##### `keyPairName`<sup>Optional</sup> <a name="keyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.keyPairName"></a>

```java
public java.lang.String getKeyPairName();
```

- *Type:* java.lang.String

The name of your key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#key_pair_name LightsailInstance#key_pair_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.location"></a>

```java
public LightsailInstanceLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#location LightsailInstance#location}

---

##### `networking`<sup>Optional</sup> <a name="networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.networking"></a>

```java
public LightsailInstanceNetworking getNetworking();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

Networking of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#networking LightsailInstance#networking}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.state"></a>

```java
public LightsailInstanceState getState();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

Current State of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#state LightsailInstance#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LightsailInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#tags LightsailInstance#tags}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

A launch script you can create that configures a server with additional user data.

For example, you might want to run apt-get -y update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#user_data LightsailInstance#user_data}

---

### LightsailInstanceHardware <a name="LightsailInstanceHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceHardware;

LightsailInstanceHardware.builder()
//  .disks(IResolvable|java.util.List<LightsailInstanceHardwareDisks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.property.disks">disks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>></code> | Disks attached to the Instance. |

---

##### `disks`<sup>Optional</sup> <a name="disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.property.disks"></a>

```java
public IResolvable|java.util.List<LightsailInstanceHardwareDisks> getDisks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>>

Disks attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#disks LightsailInstance#disks}

---

### LightsailInstanceHardwareDisks <a name="LightsailInstanceHardwareDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceHardwareDisks;

LightsailInstanceHardwareDisks.builder()
//  .attachedTo(java.lang.String)
//  .attachmentState(java.lang.String)
//  .diskName(java.lang.String)
//  .iops(java.lang.Number)
//  .isSystemDisk(java.lang.Boolean|IResolvable)
//  .path(java.lang.String)
//  .sizeInGb(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachedTo">attachedTo</a></code> | <code>java.lang.String</code> | Instance attached to the disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachmentState">attachmentState</a></code> | <code>java.lang.String</code> | Attachment state of the disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.diskName">diskName</a></code> | <code>java.lang.String</code> | The names to use for your new Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.iops">iops</a></code> | <code>java.lang.Number</code> | IOPS of disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.isSystemDisk">isSystemDisk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Is the Attached disk is the system disk of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.path">path</a></code> | <code>java.lang.String</code> | Path of the disk attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.String</code> | Size of the disk attached to the Instance. |

---

##### `attachedTo`<sup>Optional</sup> <a name="attachedTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachedTo"></a>

```java
public java.lang.String getAttachedTo();
```

- *Type:* java.lang.String

Instance attached to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#attached_to LightsailInstance#attached_to}

---

##### `attachmentState`<sup>Optional</sup> <a name="attachmentState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachmentState"></a>

```java
public java.lang.String getAttachmentState();
```

- *Type:* java.lang.String

Attachment state of the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#attachment_state LightsailInstance#attachment_state}

---

##### `diskName`<sup>Optional</sup> <a name="diskName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

The names to use for your new Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#disk_name LightsailInstance#disk_name}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

IOPS of disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#iops LightsailInstance#iops}

---

##### `isSystemDisk`<sup>Optional</sup> <a name="isSystemDisk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.isSystemDisk"></a>

```java
public java.lang.Boolean|IResolvable getIsSystemDisk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Is the Attached disk is the system disk of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#is_system_disk LightsailInstance#is_system_disk}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the disk attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#path LightsailInstance#path}

---

##### `sizeInGb`<sup>Optional</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.sizeInGb"></a>

```java
public java.lang.String getSizeInGb();
```

- *Type:* java.lang.String

Size of the disk attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#size_in_gb LightsailInstance#size_in_gb}

---

### LightsailInstanceLocation <a name="LightsailInstanceLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceLocation;

LightsailInstanceLocation.builder()
    .build();
```


### LightsailInstanceNetworking <a name="LightsailInstanceNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworking;

LightsailInstanceNetworking.builder()
//  .monthlyTransfer(LightsailInstanceNetworkingMonthlyTransfer)
//  .ports(IResolvable|java.util.List<LightsailInstanceNetworkingPorts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.monthlyTransfer">monthlyTransfer</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | Monthly Transfer of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.ports">ports</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>></code> | Ports to the Instance. |

---

##### `monthlyTransfer`<sup>Optional</sup> <a name="monthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.monthlyTransfer"></a>

```java
public LightsailInstanceNetworkingMonthlyTransfer getMonthlyTransfer();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

Monthly Transfer of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#monthly_transfer LightsailInstance#monthly_transfer}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.ports"></a>

```java
public IResolvable|java.util.List<LightsailInstanceNetworkingPorts> getPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>>

Ports to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#ports LightsailInstance#ports}

---

### LightsailInstanceNetworkingMonthlyTransfer <a name="LightsailInstanceNetworkingMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworkingMonthlyTransfer;

LightsailInstanceNetworkingMonthlyTransfer.builder()
    .build();
```


### LightsailInstanceNetworkingPorts <a name="LightsailInstanceNetworkingPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworkingPorts;

LightsailInstanceNetworkingPorts.builder()
//  .accessDirection(java.lang.String)
//  .accessFrom(java.lang.String)
//  .accessType(java.lang.String)
//  .cidrListAliases(java.util.List<java.lang.String>)
//  .cidrs(java.util.List<java.lang.String>)
//  .commonName(java.lang.String)
//  .fromPort(java.lang.Number)
//  .ipv6Cidrs(java.util.List<java.lang.String>)
//  .protocol(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessDirection">accessDirection</a></code> | <code>java.lang.String</code> | Access Direction for Protocol of the Instance(inbound/outbound). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessFrom">accessFrom</a></code> | <code>java.lang.String</code> | Access From Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessType">accessType</a></code> | <code>java.lang.String</code> | Access Type Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrListAliases">cidrListAliases</a></code> | <code>java.util.List<java.lang.String></code> | cidr List Aliases. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | cidrs. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.commonName">commonName</a></code> | <code>java.lang.String</code> | CommonName for Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | From Port of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.ipv6Cidrs">ipv6Cidrs</a></code> | <code>java.util.List<java.lang.String></code> | IPv6 Cidrs. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Port Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | To Port of the Instance. |

---

##### `accessDirection`<sup>Optional</sup> <a name="accessDirection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessDirection"></a>

```java
public java.lang.String getAccessDirection();
```

- *Type:* java.lang.String

Access Direction for Protocol of the Instance(inbound/outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#access_direction LightsailInstance#access_direction}

---

##### `accessFrom`<sup>Optional</sup> <a name="accessFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessFrom"></a>

```java
public java.lang.String getAccessFrom();
```

- *Type:* java.lang.String

Access From Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#access_from LightsailInstance#access_from}

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

Access Type Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#access_type LightsailInstance#access_type}

---

##### `cidrListAliases`<sup>Optional</sup> <a name="cidrListAliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrListAliases"></a>

```java
public java.util.List<java.lang.String> getCidrListAliases();
```

- *Type:* java.util.List<java.lang.String>

cidr List Aliases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#cidr_list_aliases LightsailInstance#cidr_list_aliases}

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#cidrs LightsailInstance#cidrs}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

CommonName for Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#common_name LightsailInstance#common_name}

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

From Port of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#from_port LightsailInstance#from_port}

---

##### `ipv6Cidrs`<sup>Optional</sup> <a name="ipv6Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.ipv6Cidrs"></a>

```java
public java.util.List<java.lang.String> getIpv6Cidrs();
```

- *Type:* java.util.List<java.lang.String>

IPv6 Cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#ipv_6_cidrs LightsailInstance#ipv_6_cidrs}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Port Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#protocol LightsailInstance#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

To Port of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#to_port LightsailInstance#to_port}

---

### LightsailInstanceState <a name="LightsailInstanceState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceState;

LightsailInstanceState.builder()
    .build();
```


### LightsailInstanceTags <a name="LightsailInstanceTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceTags;

LightsailInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#key LightsailInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_instance#value LightsailInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference <a name="LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference;

new LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay">resetSnapshotTimeOfDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnapshotTimeOfDay` <a name="resetSnapshotTimeOfDay" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay"></a>

```java
public void resetSnapshotTimeOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput">snapshotTimeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay">snapshotTimeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snapshotTimeOfDayInput`<sup>Optional</sup> <a name="snapshotTimeOfDayInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput"></a>

```java
public java.lang.String getSnapshotTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `snapshotTimeOfDay`<sup>Required</sup> <a name="snapshotTimeOfDay" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay"></a>

```java
public java.lang.String getSnapshotTimeOfDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceAddOnsAutoSnapshotAddOnRequest getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---


### LightsailInstanceAddOnsList <a name="LightsailInstanceAddOnsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceAddOnsList;

new LightsailInstanceAddOnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get"></a>

```java
public LightsailInstanceAddOnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailInstanceAddOns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>>

---


### LightsailInstanceAddOnsOutputReference <a name="LightsailInstanceAddOnsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceAddOnsOutputReference;

new LightsailInstanceAddOnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest">putAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAddOnType">resetAddOnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAutoSnapshotAddOnRequest">resetAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoSnapshotAddOnRequest` <a name="putAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest"></a>

```java
public void putAutoSnapshotAddOnRequest(LightsailInstanceAddOnsAutoSnapshotAddOnRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---

##### `resetAddOnType` <a name="resetAddOnType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAddOnType"></a>

```java
public void resetAddOnType()
```

##### `resetAutoSnapshotAddOnRequest` <a name="resetAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAutoSnapshotAddOnRequest"></a>

```java
public void resetAutoSnapshotAddOnRequest()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest">autoSnapshotAddOnRequest</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnTypeInput">addOnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequestInput">autoSnapshotAddOnRequestInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnType">addOnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoSnapshotAddOnRequest`<sup>Required</sup> <a name="autoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest"></a>

```java
public LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference getAutoSnapshotAddOnRequest();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a>

---

##### `addOnTypeInput`<sup>Optional</sup> <a name="addOnTypeInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnTypeInput"></a>

```java
public java.lang.String getAddOnTypeInput();
```

- *Type:* java.lang.String

---

##### `autoSnapshotAddOnRequestInput`<sup>Optional</sup> <a name="autoSnapshotAddOnRequestInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequestInput"></a>

```java
public IResolvable|LightsailInstanceAddOnsAutoSnapshotAddOnRequest getAutoSnapshotAddOnRequestInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `addOnType`<sup>Required</sup> <a name="addOnType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnType"></a>

```java
public java.lang.String getAddOnType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceAddOns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>

---


### LightsailInstanceHardwareDisksList <a name="LightsailInstanceHardwareDisksList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceHardwareDisksList;

new LightsailInstanceHardwareDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get"></a>

```java
public LightsailInstanceHardwareDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailInstanceHardwareDisks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>>

---


### LightsailInstanceHardwareDisksOutputReference <a name="LightsailInstanceHardwareDisksOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceHardwareDisksOutputReference;

new LightsailInstanceHardwareDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachedTo">resetAttachedTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachmentState">resetAttachmentState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetDiskName">resetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIsSystemDisk">resetIsSystemDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetSizeInGb">resetSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachedTo` <a name="resetAttachedTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachedTo"></a>

```java
public void resetAttachedTo()
```

##### `resetAttachmentState` <a name="resetAttachmentState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachmentState"></a>

```java
public void resetAttachmentState()
```

##### `resetDiskName` <a name="resetDiskName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetDiskName"></a>

```java
public void resetDiskName()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetIsSystemDisk` <a name="resetIsSystemDisk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIsSystemDisk"></a>

```java
public void resetIsSystemDisk()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSizeInGb` <a name="resetSizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetSizeInGb"></a>

```java
public void resetSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedToInput">attachedToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentStateInput">attachmentStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDiskInput">isSystemDiskInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedTo">attachedTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentState">attachmentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskName">diskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDisk">isSystemDisk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachedToInput`<sup>Optional</sup> <a name="attachedToInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedToInput"></a>

```java
public java.lang.String getAttachedToInput();
```

- *Type:* java.lang.String

---

##### `attachmentStateInput`<sup>Optional</sup> <a name="attachmentStateInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentStateInput"></a>

```java
public java.lang.String getAttachmentStateInput();
```

- *Type:* java.lang.String

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskNameInput"></a>

```java
public java.lang.String getDiskNameInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `isSystemDiskInput`<sup>Optional</sup> <a name="isSystemDiskInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDiskInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSystemDiskInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGbInput"></a>

```java
public java.lang.String getSizeInGbInput();
```

- *Type:* java.lang.String

---

##### `attachedTo`<sup>Required</sup> <a name="attachedTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedTo"></a>

```java
public java.lang.String getAttachedTo();
```

- *Type:* java.lang.String

---

##### `attachmentState`<sup>Required</sup> <a name="attachmentState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentState"></a>

```java
public java.lang.String getAttachmentState();
```

- *Type:* java.lang.String

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `isSystemDisk`<sup>Required</sup> <a name="isSystemDisk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDisk"></a>

```java
public java.lang.Boolean|IResolvable getIsSystemDisk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGb"></a>

```java
public java.lang.String getSizeInGb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceHardwareDisks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>

---


### LightsailInstanceHardwareOutputReference <a name="LightsailInstanceHardwareOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceHardwareOutputReference;

new LightsailInstanceHardwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks">putDisks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resetDisks">resetDisks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisks` <a name="putDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks"></a>

```java
public void putDisks(IResolvable|java.util.List<LightsailInstanceHardwareDisks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>>

---

##### `resetDisks` <a name="resetDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resetDisks"></a>

```java
public void resetDisks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disks">disks</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList">LightsailInstanceHardwareDisksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.ramSizeInGb">ramSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disksInput">disksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disks"></a>

```java
public LightsailInstanceHardwareDisksList getDisks();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList">LightsailInstanceHardwareDisksList</a>

---

##### `ramSizeInGb`<sup>Required</sup> <a name="ramSizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.ramSizeInGb"></a>

```java
public java.lang.Number getRamSizeInGb();
```

- *Type:* java.lang.Number

---

##### `disksInput`<sup>Optional</sup> <a name="disksInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disksInput"></a>

```java
public IResolvable|java.util.List<LightsailInstanceHardwareDisks> getDisksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceHardware getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

---


### LightsailInstanceLocationOutputReference <a name="LightsailInstanceLocationOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceLocationOutputReference;

new LightsailInstanceLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

---


### LightsailInstanceNetworkingMonthlyTransferOutputReference <a name="LightsailInstanceNetworkingMonthlyTransferOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworkingMonthlyTransferOutputReference;

new LightsailInstanceNetworkingMonthlyTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated">gbPerMonthAllocated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gbPerMonthAllocated`<sup>Required</sup> <a name="gbPerMonthAllocated" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated"></a>

```java
public java.lang.String getGbPerMonthAllocated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceNetworkingMonthlyTransfer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

---


### LightsailInstanceNetworkingOutputReference <a name="LightsailInstanceNetworkingOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworkingOutputReference;

new LightsailInstanceNetworkingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer">putMonthlyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetMonthlyTransfer">resetMonthlyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthlyTransfer` <a name="putMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer"></a>

```java
public void putMonthlyTransfer(LightsailInstanceNetworkingMonthlyTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

---

##### `putPorts` <a name="putPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable|java.util.List<LightsailInstanceNetworkingPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>>

---

##### `resetMonthlyTransfer` <a name="resetMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetMonthlyTransfer"></a>

```java
public void resetMonthlyTransfer()
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransfer">monthlyTransfer</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference">LightsailInstanceNetworkingMonthlyTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList">LightsailInstanceNetworkingPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransferInput">monthlyTransferInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.portsInput">portsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monthlyTransfer`<sup>Required</sup> <a name="monthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransfer"></a>

```java
public LightsailInstanceNetworkingMonthlyTransferOutputReference getMonthlyTransfer();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference">LightsailInstanceNetworkingMonthlyTransferOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.ports"></a>

```java
public LightsailInstanceNetworkingPortsList getPorts();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList">LightsailInstanceNetworkingPortsList</a>

---

##### `monthlyTransferInput`<sup>Optional</sup> <a name="monthlyTransferInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransferInput"></a>

```java
public IResolvable|LightsailInstanceNetworkingMonthlyTransfer getMonthlyTransferInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.portsInput"></a>

```java
public IResolvable|java.util.List<LightsailInstanceNetworkingPorts> getPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceNetworking getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

---


### LightsailInstanceNetworkingPortsList <a name="LightsailInstanceNetworkingPortsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworkingPortsList;

new LightsailInstanceNetworkingPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get"></a>

```java
public LightsailInstanceNetworkingPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailInstanceNetworkingPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>>

---


### LightsailInstanceNetworkingPortsOutputReference <a name="LightsailInstanceNetworkingPortsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceNetworkingPortsOutputReference;

new LightsailInstanceNetworkingPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessDirection">resetAccessDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessFrom">resetAccessFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrListAliases">resetCidrListAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetIpv6Cidrs">resetIpv6Cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessDirection` <a name="resetAccessDirection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessDirection"></a>

```java
public void resetAccessDirection()
```

##### `resetAccessFrom` <a name="resetAccessFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessFrom"></a>

```java
public void resetAccessFrom()
```

##### `resetAccessType` <a name="resetAccessType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessType"></a>

```java
public void resetAccessType()
```

##### `resetCidrListAliases` <a name="resetCidrListAliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrListAliases"></a>

```java
public void resetCidrListAliases()
```

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrs"></a>

```java
public void resetCidrs()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpv6Cidrs` <a name="resetIpv6Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetIpv6Cidrs"></a>

```java
public void resetIpv6Cidrs()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirectionInput">accessDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFromInput">accessFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliasesInput">cidrListAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6CidrsInput">ipv6CidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirection">accessDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFrom">accessFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases">cidrListAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs">ipv6Cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDirectionInput`<sup>Optional</sup> <a name="accessDirectionInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirectionInput"></a>

```java
public java.lang.String getAccessDirectionInput();
```

- *Type:* java.lang.String

---

##### `accessFromInput`<sup>Optional</sup> <a name="accessFromInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFromInput"></a>

```java
public java.lang.String getAccessFromInput();
```

- *Type:* java.lang.String

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `cidrListAliasesInput`<sup>Optional</sup> <a name="cidrListAliasesInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliasesInput"></a>

```java
public java.util.List<java.lang.String> getCidrListAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrsInput`<sup>Optional</sup> <a name="ipv6CidrsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6CidrsInput"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `accessDirection`<sup>Required</sup> <a name="accessDirection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirection"></a>

```java
public java.lang.String getAccessDirection();
```

- *Type:* java.lang.String

---

##### `accessFrom`<sup>Required</sup> <a name="accessFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFrom"></a>

```java
public java.lang.String getAccessFrom();
```

- *Type:* java.lang.String

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `cidrListAliases`<sup>Required</sup> <a name="cidrListAliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases"></a>

```java
public java.util.List<java.lang.String> getCidrListAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipv6Cidrs`<sup>Required</sup> <a name="ipv6Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs"></a>

```java
public java.util.List<java.lang.String> getIpv6Cidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceNetworkingPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>

---


### LightsailInstanceStateOutputReference <a name="LightsailInstanceStateOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceStateOutputReference;

new LightsailInstanceStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceState getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

---


### LightsailInstanceTagsList <a name="LightsailInstanceTagsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceTagsList;

new LightsailInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get"></a>

```java
public LightsailInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>>

---


### LightsailInstanceTagsOutputReference <a name="LightsailInstanceTagsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_instance.LightsailInstanceTagsOutputReference;

new LightsailInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>

---



