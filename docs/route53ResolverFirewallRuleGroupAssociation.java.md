# `route53ResolverFirewallRuleGroupAssociation` Submodule <a name="`route53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroupAssociation <a name="Route53ResolverFirewallRuleGroupAssociation" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association awscc_route53resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallRuleGroupId(java.lang.String)
    .priority(java.lang.Number)
    .vpcId(java.lang.String)
//  .mutationProtection(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | FirewallRuleGroupId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | VpcId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.mutationProtection">mutationProtection</a></code> | <code>java.lang.String</code> | MutationProtectionStatus. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | FirewallRuleGroupAssociationName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>></code> | Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.firewallRuleGroupId"></a>

- *Type:* java.lang.String

FirewallRuleGroupId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}

---

##### `mutationProtection`<sup>Optional</sup> <a name="mutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.mutationProtection"></a>

- *Type:* java.lang.String

MutationProtectionStatus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

FirewallRuleGroupAssociationName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>>

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection">resetMutationProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>>

---

##### `resetMutationProtection` <a name="resetMutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection"></a>

```java
public void resetMutationProtection()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ResolverFirewallRuleGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ResolverFirewallRuleGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creatorRequestId">creatorRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId">firewallRuleGroupAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.managedOwnerName">managedOwnerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.modificationTime">modificationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList">Route53ResolverFirewallRuleGroupAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput">mutationProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection">mutationProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creatorRequestId"></a>

```java
public java.lang.String getCreatorRequestId();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupAssociationId`<sup>Required</sup> <a name="firewallRuleGroupAssociationId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId"></a>

```java
public java.lang.String getFirewallRuleGroupAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedOwnerName`<sup>Required</sup> <a name="managedOwnerName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.managedOwnerName"></a>

```java
public java.lang.String getManagedOwnerName();
```

- *Type:* java.lang.String

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.modificationTime"></a>

```java
public java.lang.String getModificationTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags"></a>

```java
public Route53ResolverFirewallRuleGroupAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList">Route53ResolverFirewallRuleGroupAssociationTagsList</a>

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput"></a>

```java
public java.lang.String getFirewallRuleGroupIdInput();
```

- *Type:* java.lang.String

---

##### `mutationProtectionInput`<sup>Optional</sup> <a name="mutationProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput"></a>

```java
public java.lang.String getMutationProtectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `mutationProtection`<sup>Required</sup> <a name="mutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```java
public java.lang.String getMutationProtection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupAssociationConfig <a name="Route53ResolverFirewallRuleGroupAssociationConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociationConfig;

Route53ResolverFirewallRuleGroupAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallRuleGroupId(java.lang.String)
    .priority(java.lang.Number)
    .vpcId(java.lang.String)
//  .mutationProtection(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | FirewallRuleGroupId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | VpcId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection">mutationProtection</a></code> | <code>java.lang.String</code> | MutationProtectionStatus. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | FirewallRuleGroupAssociationName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>></code> | Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

FirewallRuleGroupId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}

---

##### `mutationProtection`<sup>Optional</sup> <a name="mutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection"></a>

```java
public java.lang.String getMutationProtection();
```

- *Type:* java.lang.String

MutationProtectionStatus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

FirewallRuleGroupAssociationName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>>

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}

---

### Route53ResolverFirewallRuleGroupAssociationTags <a name="Route53ResolverFirewallRuleGroupAssociationTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociationTags;

Route53ResolverFirewallRuleGroupAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#key Route53ResolverFirewallRuleGroupAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_firewall_rule_group_association#value Route53ResolverFirewallRuleGroupAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupAssociationTagsList <a name="Route53ResolverFirewallRuleGroupAssociationTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociationTagsList;

new Route53ResolverFirewallRuleGroupAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.get"></a>

```java
public Route53ResolverFirewallRuleGroupAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>>

---


### Route53ResolverFirewallRuleGroupAssociationTagsOutputReference <a name="Route53ResolverFirewallRuleGroupAssociationTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference;

new Route53ResolverFirewallRuleGroupAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>

---



