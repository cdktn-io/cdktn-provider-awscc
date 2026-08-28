# `rtbfabricLinkRoutingRule` Submodule <a name="`rtbfabricLinkRoutingRule` Submodule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLinkRoutingRule <a name="RtbfabricLinkRoutingRule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRule;

RtbfabricLinkRoutingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .conditions(RtbfabricLinkRoutingRuleConditions)
    .gatewayId(java.lang.String)
    .linkId(java.lang.String)
    .priority(java.lang.Number)
//  .tags(IResolvable|java.util.List<RtbfabricLinkRoutingRuleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.linkId">linkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>></code> | Tags to assign to the LinkRoutingRule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.linkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>>

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions"></a>

```java
public void putConditions(RtbfabricLinkRoutingRuleConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RtbfabricLinkRoutingRuleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRule;

RtbfabricLinkRoutingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRule;

RtbfabricLinkRoutingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRule;

RtbfabricLinkRoutingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRule;

RtbfabricLinkRoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RtbfabricLinkRoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RtbfabricLinkRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RtbfabricLinkRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLinkRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp">updatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput">linkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId">linkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions"></a>

```java
public RtbfabricLinkRoutingRuleConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags"></a>

```java
public RtbfabricLinkRoutingRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp"></a>

```java
public java.lang.String getUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput"></a>

```java
public IResolvable|RtbfabricLinkRoutingRuleConditions getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput"></a>

```java
public java.lang.String getLinkIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RtbfabricLinkRoutingRuleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId"></a>

```java
public java.lang.String getLinkId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkRoutingRuleConditions <a name="RtbfabricLinkRoutingRuleConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleConditions;

RtbfabricLinkRoutingRuleConditions.builder()
//  .hostHeader(java.lang.String)
//  .hostHeaderWildcard(java.lang.String)
//  .pathExact(java.lang.String)
//  .pathPrefix(java.lang.String)
//  .queryStringEquals(RtbfabricLinkRoutingRuleConditionsQueryStringEquals)
//  .queryStringExists(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader">hostHeader</a></code> | <code>java.lang.String</code> | Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard">hostHeaderWildcard</a></code> | <code>java.lang.String</code> | Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact">pathExact</a></code> | <code>java.lang.String</code> | Exact path match ? must start with /. Mutually exclusive with PathPrefix. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals">queryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | Query string key=value pair match (single pair). |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists">queryStringExists</a></code> | <code>java.lang.String</code> | Query string key presence check (any value accepted). |

---

##### `hostHeader`<sup>Optional</sup> <a name="hostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader"></a>

```java
public java.lang.String getHostHeader();
```

- *Type:* java.lang.String

Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#host_header RtbfabricLinkRoutingRule#host_header}

---

##### `hostHeaderWildcard`<sup>Optional</sup> <a name="hostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard"></a>

```java
public java.lang.String getHostHeaderWildcard();
```

- *Type:* java.lang.String

Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard RtbfabricLinkRoutingRule#host_header_wildcard}

---

##### `pathExact`<sup>Optional</sup> <a name="pathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact"></a>

```java
public java.lang.String getPathExact();
```

- *Type:* java.lang.String

Exact path match ? must start with /. Mutually exclusive with PathPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#path_exact RtbfabricLinkRoutingRule#path_exact}

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#path_prefix RtbfabricLinkRoutingRule#path_prefix}

---

##### `queryStringEquals`<sup>Optional</sup> <a name="queryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals"></a>

```java
public RtbfabricLinkRoutingRuleConditionsQueryStringEquals getQueryStringEquals();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

Query string key=value pair match (single pair).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals RtbfabricLinkRoutingRule#query_string_equals}

---

##### `queryStringExists`<sup>Optional</sup> <a name="queryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists"></a>

```java
public java.lang.String getQueryStringExists();
```

- *Type:* java.lang.String

Query string key presence check (any value accepted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists RtbfabricLinkRoutingRule#query_string_exists}

---

### RtbfabricLinkRoutingRuleConditionsQueryStringEquals <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals;

RtbfabricLinkRoutingRuleConditionsQueryStringEquals.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key">key</a></code> | <code>java.lang.String</code> | Query string key ? RFC 3986 unreserved characters. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value">value</a></code> | <code>java.lang.String</code> | Query string value ? RFC 3986 unreserved characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Query string key ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Query string value ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

### RtbfabricLinkRoutingRuleConfig <a name="RtbfabricLinkRoutingRuleConfig" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleConfig;

RtbfabricLinkRoutingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .conditions(RtbfabricLinkRoutingRuleConditions)
    .gatewayId(java.lang.String)
    .linkId(java.lang.String)
    .priority(java.lang.Number)
//  .tags(IResolvable|java.util.List<RtbfabricLinkRoutingRuleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId">linkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>></code> | Tags to assign to the LinkRoutingRule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions"></a>

```java
public RtbfabricLinkRoutingRuleConditions getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId"></a>

```java
public java.lang.String getLinkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RtbfabricLinkRoutingRuleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>>

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

### RtbfabricLinkRoutingRuleTags <a name="RtbfabricLinkRoutingRuleTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleTags;

RtbfabricLinkRoutingRuleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkRoutingRuleConditionsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleConditionsOutputReference;

new RtbfabricLinkRoutingRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals">putQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader">resetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard">resetHostHeaderWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact">resetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals">resetQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists">resetQueryStringExists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryStringEquals` <a name="putQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals"></a>

```java
public void putQueryStringEquals(RtbfabricLinkRoutingRuleConditionsQueryStringEquals value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `resetHostHeader` <a name="resetHostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader"></a>

```java
public void resetHostHeader()
```

##### `resetHostHeaderWildcard` <a name="resetHostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard"></a>

```java
public void resetHostHeaderWildcard()
```

##### `resetPathExact` <a name="resetPathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact"></a>

```java
public void resetPathExact()
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix"></a>

```java
public void resetPathPrefix()
```

##### `resetQueryStringEquals` <a name="resetQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals"></a>

```java
public void resetQueryStringEquals()
```

##### `resetQueryStringExists` <a name="resetQueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists"></a>

```java
public void resetQueryStringExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals">queryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput">hostHeaderWildcardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput">pathExactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput">pathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput">queryStringEqualsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput">queryStringExistsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader">hostHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard">hostHeaderWildcard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact">pathExact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists">queryStringExists</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryStringEquals`<sup>Required</sup> <a name="queryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals"></a>

```java
public RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference getQueryStringEquals();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a>

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput"></a>

```java
public java.lang.String getHostHeaderInput();
```

- *Type:* java.lang.String

---

##### `hostHeaderWildcardInput`<sup>Optional</sup> <a name="hostHeaderWildcardInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput"></a>

```java
public java.lang.String getHostHeaderWildcardInput();
```

- *Type:* java.lang.String

---

##### `pathExactInput`<sup>Optional</sup> <a name="pathExactInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput"></a>

```java
public java.lang.String getPathExactInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput"></a>

```java
public java.lang.String getPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `queryStringEqualsInput`<sup>Optional</sup> <a name="queryStringEqualsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput"></a>

```java
public IResolvable|RtbfabricLinkRoutingRuleConditionsQueryStringEquals getQueryStringEqualsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `queryStringExistsInput`<sup>Optional</sup> <a name="queryStringExistsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput"></a>

```java
public java.lang.String getQueryStringExistsInput();
```

- *Type:* java.lang.String

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader"></a>

```java
public java.lang.String getHostHeader();
```

- *Type:* java.lang.String

---

##### `hostHeaderWildcard`<sup>Required</sup> <a name="hostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard"></a>

```java
public java.lang.String getHostHeaderWildcard();
```

- *Type:* java.lang.String

---

##### `pathExact`<sup>Required</sup> <a name="pathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact"></a>

```java
public java.lang.String getPathExact();
```

- *Type:* java.lang.String

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

---

##### `queryStringExists`<sup>Required</sup> <a name="queryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists"></a>

```java
public java.lang.String getQueryStringExists();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricLinkRoutingRuleConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---


### RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference;

new RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricLinkRoutingRuleConditionsQueryStringEquals getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---


### RtbfabricLinkRoutingRuleTagsList <a name="RtbfabricLinkRoutingRuleTagsList" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleTagsList;

new RtbfabricLinkRoutingRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get"></a>

```java
public RtbfabricLinkRoutingRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RtbfabricLinkRoutingRuleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>>

---


### RtbfabricLinkRoutingRuleTagsOutputReference <a name="RtbfabricLinkRoutingRuleTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_link_routing_rule.RtbfabricLinkRoutingRuleTagsOutputReference;

new RtbfabricLinkRoutingRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricLinkRoutingRuleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>

---



