# `networksecuritymanagerDeployment` Submodule <a name="`networksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerDeployment <a name="NetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeployment;

NetworksecuritymanagerDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deploymentName(java.lang.String)
//  .associatedPolicyList(IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedPolicyListStruct>)
//  .associatedScopeList(IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedScopeListStruct>)
//  .deploymentConfiguration(NetworksecuritymanagerDeploymentDeploymentConfiguration)
//  .deploymentDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworksecuritymanagerDeploymentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedPolicyList">associatedPolicyList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>></code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedScopeList">associatedScopeList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>></code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentDescription">deploymentDescription</a></code> | <code>java.lang.String</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>></code> | The tags associated with the deployment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentName"></a>

- *Type:* java.lang.String

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `associatedPolicyList`<sup>Optional</sup> <a name="associatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedPolicyList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>>

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `associatedScopeList`<sup>Optional</sup> <a name="associatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedScopeList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>>

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `deploymentDescription`<sup>Optional</sup> <a name="deploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentDescription"></a>

- *Type:* java.lang.String

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>>

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList">putAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList">putAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList">resetAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList">resetAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription">resetDeploymentDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedPolicyList` <a name="putAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList"></a>

```java
public void putAssociatedPolicyList(IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedPolicyListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>>

---

##### `putAssociatedScopeList` <a name="putAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList"></a>

```java
public void putAssociatedScopeList(IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedScopeListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>>

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration"></a>

```java
public void putDeploymentConfiguration(NetworksecuritymanagerDeploymentDeploymentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworksecuritymanagerDeploymentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>>

---

##### `resetAssociatedPolicyList` <a name="resetAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList"></a>

```java
public void resetAssociatedPolicyList()
```

##### `resetAssociatedScopeList` <a name="resetAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList"></a>

```java
public void resetAssociatedScopeList()
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration"></a>

```java
public void resetDeploymentConfiguration()
```

##### `resetDeploymentDescription` <a name="resetDeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription"></a>

```java
public void resetDeploymentDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeployment;

NetworksecuritymanagerDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeployment;

NetworksecuritymanagerDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeployment;

NetworksecuritymanagerDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeployment;

NetworksecuritymanagerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworksecuritymanagerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworksecuritymanagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList">associatedPolicyList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList">associatedScopeList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn">deploymentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput">associatedPolicyListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput">associatedScopeListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput">deploymentDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput">deploymentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription">deploymentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedPolicyList`<sup>Required</sup> <a name="associatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```java
public NetworksecuritymanagerDeploymentAssociatedPolicyListStructList getAssociatedPolicyList();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `associatedScopeList`<sup>Required</sup> <a name="associatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```java
public NetworksecuritymanagerDeploymentAssociatedScopeListStructList getAssociatedScopeList();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `deploymentArn`<sup>Required</sup> <a name="deploymentArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn"></a>

```java
public java.lang.String getDeploymentArn();
```

- *Type:* java.lang.String

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```java
public NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags"></a>

```java
public NetworksecuritymanagerDeploymentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `associatedPolicyListInput`<sup>Optional</sup> <a name="associatedPolicyListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedPolicyListStruct> getAssociatedPolicyListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>>

---

##### `associatedScopeListInput`<sup>Optional</sup> <a name="associatedScopeListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedScopeListStruct> getAssociatedScopeListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>>

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput"></a>

```java
public IResolvable|NetworksecuritymanagerDeploymentDeploymentConfiguration getDeploymentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `deploymentDescriptionInput`<sup>Optional</sup> <a name="deploymentDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput"></a>

```java
public java.lang.String getDeploymentDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deploymentNameInput`<sup>Optional</sup> <a name="deploymentNameInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput"></a>

```java
public java.lang.String getDeploymentNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>>

---

##### `deploymentDescription`<sup>Required</sup> <a name="deploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```java
public java.lang.String getDeploymentDescription();
```

- *Type:* java.lang.String

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName"></a>

```java
public java.lang.String getDeploymentName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct;

NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.builder()
//  .policyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | ARN of the associated policy. |

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

ARN of the associated policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#policy_arn NetworksecuritymanagerDeployment#policy_arn}

---

### NetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct;

NetworksecuritymanagerDeploymentAssociatedScopeListStruct.builder()
//  .scopeArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn">scopeArn</a></code> | <code>java.lang.String</code> | ARN of the associated scope. |

---

##### `scopeArn`<sup>Optional</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn"></a>

```java
public java.lang.String getScopeArn();
```

- *Type:* java.lang.String

ARN of the associated scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}

---

### NetworksecuritymanagerDeploymentConfig <a name="NetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentConfig;

NetworksecuritymanagerDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deploymentName(java.lang.String)
//  .associatedPolicyList(IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedPolicyListStruct>)
//  .associatedScopeList(IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedScopeListStruct>)
//  .deploymentConfiguration(NetworksecuritymanagerDeploymentDeploymentConfiguration)
//  .deploymentDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworksecuritymanagerDeploymentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList">associatedPolicyList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>></code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList">associatedScopeList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>></code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription">deploymentDescription</a></code> | <code>java.lang.String</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>></code> | The tags associated with the deployment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName"></a>

```java
public java.lang.String getDeploymentName();
```

- *Type:* java.lang.String

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `associatedPolicyList`<sup>Optional</sup> <a name="associatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedPolicyListStruct> getAssociatedPolicyList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>>

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `associatedScopeList`<sup>Optional</sup> <a name="associatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedScopeListStruct> getAssociatedScopeList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>>

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration"></a>

```java
public NetworksecuritymanagerDeploymentDeploymentConfiguration getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `deploymentDescription`<sup>Optional</sup> <a name="deploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription"></a>

```java
public java.lang.String getDeploymentDescription();
```

- *Type:* java.lang.String

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>>

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

### NetworksecuritymanagerDeploymentDeploymentConfiguration <a name="NetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentDeploymentConfiguration;

NetworksecuritymanagerDeploymentDeploymentConfiguration.builder()
//  .enableCrossAccountVisibility(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility">enableCrossAccountVisibility</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether cross-account visibility is enabled for the deployment. |

---

##### `enableCrossAccountVisibility`<sup>Optional</sup> <a name="enableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility"></a>

```java
public java.lang.Boolean|IResolvable getEnableCrossAccountVisibility();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether cross-account visibility is enabled for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}

---

### NetworksecuritymanagerDeploymentTags <a name="NetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentTags;

NetworksecuritymanagerDeploymentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList;

new NetworksecuritymanagerDeploymentAssociatedPolicyListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```java
public NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedPolicyListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>>

---


### NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference;

new NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn"></a>

```java
public void resetPolicyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput">policyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput"></a>

```java
public java.lang.String getPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList;

new NetworksecuritymanagerDeploymentAssociatedScopeListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```java
public NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentAssociatedScopeListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>>

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference;

new NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn">resetScopeArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopeArn` <a name="resetScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn"></a>

```java
public void resetScopeArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput">scopeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">scopeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeArnInput`<sup>Optional</sup> <a name="scopeArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput"></a>

```java
public java.lang.String getScopeArnInput();
```

- *Type:* java.lang.String

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```java
public java.lang.String getScopeArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>

---


### NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference;

new NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility">resetEnableCrossAccountVisibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCrossAccountVisibility` <a name="resetEnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility"></a>

```java
public void resetEnableCrossAccountVisibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput">enableCrossAccountVisibilityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">enableCrossAccountVisibility</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableCrossAccountVisibilityInput`<sup>Optional</sup> <a name="enableCrossAccountVisibilityInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCrossAccountVisibilityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableCrossAccountVisibility`<sup>Required</sup> <a name="enableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```java
public java.lang.Boolean|IResolvable getEnableCrossAccountVisibility();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerDeploymentDeploymentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---


### NetworksecuritymanagerDeploymentTagsList <a name="NetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentTagsList;

new NetworksecuritymanagerDeploymentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get"></a>

```java
public NetworksecuritymanagerDeploymentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerDeploymentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>>

---


### NetworksecuritymanagerDeploymentTagsOutputReference <a name="NetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_deployment.NetworksecuritymanagerDeploymentTagsOutputReference;

new NetworksecuritymanagerDeploymentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerDeploymentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>

---



