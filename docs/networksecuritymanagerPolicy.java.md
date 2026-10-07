# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallType(java.lang.String)
    .policyConfiguration(NetworksecuritymanagerPolicyPolicyConfiguration)
    .policyName(java.lang.String)
    .priority(java.lang.Number)
//  .associatedTemplateAndRuleList(IResolvable|java.util.List<NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct>)
//  .policyDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworksecuritymanagerPolicyTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType">firewallType</a></code> | <code>java.lang.String</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyConfiguration">policyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyName">policyName</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.associatedTemplateAndRuleList">associatedTemplateAndRuleList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>></code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyDescription">policyDescription</a></code> | <code>java.lang.String</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>></code> | The tags associated with the policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType"></a>

- *Type:* java.lang.String

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyName"></a>

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `associatedTemplateAndRuleList`<sup>Optional</sup> <a name="associatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.associatedTemplateAndRuleList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>>

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `policyDescription`<sup>Optional</sup> <a name="policyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyDescription"></a>

- *Type:* java.lang.String

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>>

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList">putAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration">putPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList">resetAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription">resetPolicyDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedTemplateAndRuleList` <a name="putAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList"></a>

```java
public void putAssociatedTemplateAndRuleList(IResolvable|java.util.List<NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>>

---

##### `putPolicyConfiguration` <a name="putPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration"></a>

```java
public void putPolicyConfiguration(NetworksecuritymanagerPolicyPolicyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworksecuritymanagerPolicyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>>

---

##### `resetAssociatedTemplateAndRuleList` <a name="resetAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList"></a>

```java
public void resetAssociatedTemplateAndRuleList()
```

##### `resetPolicyDescription` <a name="resetPolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription"></a>

```java
public void resetPolicyDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworksecuritymanagerPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList">associatedTemplateAndRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration">policyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput">associatedTemplateAndRuleListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">firewallTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput">policyConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput">policyDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription">policyDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedTemplateAndRuleList`<sup>Required</sup> <a name="associatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList"></a>

```java
public NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList getAssociatedTemplateAndRuleList();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration"></a>

```java
public NetworksecuritymanagerPolicyPolicyConfigurationOutputReference getPolicyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```java
public NetworksecuritymanagerPolicyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `associatedTemplateAndRuleListInput`<sup>Optional</sup> <a name="associatedTemplateAndRuleListInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct> getAssociatedTemplateAndRuleListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>>

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```java
public java.lang.String getFirewallTypeInput();
```

- *Type:* java.lang.String

---

##### `policyConfigurationInput`<sup>Optional</sup> <a name="policyConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyPolicyConfiguration getPolicyConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `policyDescriptionInput`<sup>Optional</sup> <a name="policyDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput"></a>

```java
public java.lang.String getPolicyDescriptionInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>>

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription"></a>

```java
public java.lang.String getPolicyDescription();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct;

NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.builder()
//  .ruleArn(java.lang.String)
//  .templateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | ARN of the associated rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn">templateArn</a></code> | <code>java.lang.String</code> | ARN of the associated template. |

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#rule_arn NetworksecuritymanagerPolicy#rule_arn}

---

##### `templateArn`<sup>Optional</sup> <a name="templateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn"></a>

```java
public java.lang.String getTemplateArn();
```

- *Type:* java.lang.String

ARN of the associated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#template_arn NetworksecuritymanagerPolicy#template_arn}

---

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfig;

NetworksecuritymanagerPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallType(java.lang.String)
    .policyConfiguration(NetworksecuritymanagerPolicyPolicyConfiguration)
    .policyName(java.lang.String)
    .priority(java.lang.Number)
//  .associatedTemplateAndRuleList(IResolvable|java.util.List<NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct>)
//  .policyDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworksecuritymanagerPolicyTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration">policyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName">policyName</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList">associatedTemplateAndRuleList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>></code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription">policyDescription</a></code> | <code>java.lang.String</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>></code> | The tags associated with the policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration"></a>

```java
public NetworksecuritymanagerPolicyPolicyConfiguration getPolicyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `associatedTemplateAndRuleList`<sup>Optional</sup> <a name="associatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct> getAssociatedTemplateAndRuleList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>>

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `policyDescription`<sup>Optional</sup> <a name="policyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription"></a>

```java
public java.lang.String getPolicyDescription();
```

- *Type:* java.lang.String

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>>

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

### NetworksecuritymanagerPolicyPolicyConfiguration <a name="NetworksecuritymanagerPolicyPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyPolicyConfiguration;

NetworksecuritymanagerPolicyPolicyConfiguration.builder()
//  .remediationEnabled(java.lang.Boolean|IResolvable)
//  .resourcesCleanUp(java.lang.Boolean|IResolvable)
//  .wafConfig(NetworksecuritymanagerPolicyPolicyConfigurationWafConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled">remediationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls automatic remediation of non-compliant resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp">resourcesCleanUp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls automatic cleanup of unused resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig">wafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | WAF-specific policy settings. Populated only for WAF firewall type policies. |

---

##### `remediationEnabled`<sup>Optional</sup> <a name="remediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRemediationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls automatic remediation of non-compliant resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}

---

##### `resourcesCleanUp`<sup>Optional</sup> <a name="resourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp"></a>

```java
public java.lang.Boolean|IResolvable getResourcesCleanUp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls automatic cleanup of unused resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}

---

##### `wafConfig`<sup>Optional</sup> <a name="wafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig"></a>

```java
public NetworksecuritymanagerPolicyPolicyConfigurationWafConfig getWafConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

WAF-specific policy settings. Populated only for WAF firewall type policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig;

NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.builder()
//  .conflictResolution(java.lang.String)
//  .existingCustomerWebAclResolution(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution">conflictResolution</a></code> | <code>java.lang.String</code> | Conflict-resolution strategy applied to AWS WAF policies. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">existingCustomerWebAclResolution</a></code> | <code>java.lang.String</code> | Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL. |

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution"></a>

```java
public java.lang.String getConflictResolution();
```

- *Type:* java.lang.String

Conflict-resolution strategy applied to AWS WAF policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}

---

##### `existingCustomerWebAclResolution`<sup>Optional</sup> <a name="existingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```java
public java.lang.String getExistingCustomerWebAclResolution();
```

- *Type:* java.lang.String

Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}

---

### NetworksecuritymanagerPolicyTags <a name="NetworksecuritymanagerPolicyTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyTags;

NetworksecuritymanagerPolicyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList;

new NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get"></a>

```java
public NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>>

---


### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference;

new NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn">resetTemplateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn"></a>

```java
public void resetRuleArn()
```

##### `resetTemplateArn` <a name="resetTemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn"></a>

```java
public void resetTemplateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput">templateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn">templateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput"></a>

```java
public java.lang.String getRuleArnInput();
```

- *Type:* java.lang.String

---

##### `templateArnInput`<sup>Optional</sup> <a name="templateArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput"></a>

```java
public java.lang.String getTemplateArnInput();
```

- *Type:* java.lang.String

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn"></a>

```java
public java.lang.String getTemplateArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference;

new NetworksecuritymanagerPolicyPolicyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig">putWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled">resetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp">resetResourcesCleanUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig">resetWafConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWafConfig` <a name="putWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig"></a>

```java
public void putWafConfig(NetworksecuritymanagerPolicyPolicyConfigurationWafConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `resetRemediationEnabled` <a name="resetRemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled"></a>

```java
public void resetRemediationEnabled()
```

##### `resetResourcesCleanUp` <a name="resetResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp"></a>

```java
public void resetResourcesCleanUp()
```

##### `resetWafConfig` <a name="resetWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig"></a>

```java
public void resetWafConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig">wafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput">remediationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput">resourcesCleanUpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput">wafConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled">remediationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp">resourcesCleanUp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wafConfig`<sup>Required</sup> <a name="wafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig"></a>

```java
public NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference getWafConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a>

---

##### `remediationEnabledInput`<sup>Optional</sup> <a name="remediationEnabledInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRemediationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourcesCleanUpInput`<sup>Optional</sup> <a name="resourcesCleanUpInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```java
public java.lang.Boolean|IResolvable getResourcesCleanUpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `wafConfigInput`<sup>Optional</sup> <a name="wafConfigInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyPolicyConfigurationWafConfig getWafConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `remediationEnabled`<sup>Required</sup> <a name="remediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRemediationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourcesCleanUp`<sup>Required</sup> <a name="resourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```java
public java.lang.Boolean|IResolvable getResourcesCleanUp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyPolicyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference;

new NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution">resetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution">resetExistingCustomerWebAclResolution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConflictResolution` <a name="resetConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution"></a>

```java
public void resetConflictResolution()
```

##### `resetExistingCustomerWebAclResolution` <a name="resetExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution"></a>

```java
public void resetExistingCustomerWebAclResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">existingCustomerWebAclResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution">conflictResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">existingCustomerWebAclResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```java
public java.lang.String getConflictResolutionInput();
```

- *Type:* java.lang.String

---

##### `existingCustomerWebAclResolutionInput`<sup>Optional</sup> <a name="existingCustomerWebAclResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```java
public java.lang.String getExistingCustomerWebAclResolutionInput();
```

- *Type:* java.lang.String

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```java
public java.lang.String getConflictResolution();
```

- *Type:* java.lang.String

---

##### `existingCustomerWebAclResolution`<sup>Required</sup> <a name="existingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```java
public java.lang.String getExistingCustomerWebAclResolution();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyPolicyConfigurationWafConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTagsList <a name="NetworksecuritymanagerPolicyTagsList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyTagsList;

new NetworksecuritymanagerPolicyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get"></a>

```java
public NetworksecuritymanagerPolicyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>>

---


### NetworksecuritymanagerPolicyTagsOutputReference <a name="NetworksecuritymanagerPolicyTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networksecuritymanager_policy.NetworksecuritymanagerPolicyTagsOutputReference;

new NetworksecuritymanagerPolicyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>

---



