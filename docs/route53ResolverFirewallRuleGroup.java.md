# `route53ResolverFirewallRuleGroup` Submodule <a name="`route53ResolverFirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroup <a name="Route53ResolverFirewallRuleGroup" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroup;

Route53ResolverFirewallRuleGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .firewallRules(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupFirewallRules>)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.firewallRules">firewallRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>></code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>></code> | Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallRules`<sup>Optional</sup> <a name="firewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.firewallRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>>

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>>

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules">putFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules">resetFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFirewallRules` <a name="putFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules"></a>

```java
public void putFirewallRules(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupFirewallRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>>

---

##### `resetFirewallRules` <a name="resetFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules"></a>

```java
public void resetFirewallRules()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroup;

Route53ResolverFirewallRuleGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroup;

Route53ResolverFirewallRuleGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroup;

Route53ResolverFirewallRuleGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroup;

Route53ResolverFirewallRuleGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ResolverFirewallRuleGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ResolverFirewallRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ResolverFirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId">creatorRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules">firewallRules</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime">modificationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount">ruleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput">firewallRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId"></a>

```java
public java.lang.String getCreatorRequestId();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `firewallRules`<sup>Required</sup> <a name="firewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesList getFirewallRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime"></a>

```java
public java.lang.String getModificationTime();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `ruleCount`<sup>Required</sup> <a name="ruleCount" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount"></a>

```java
public java.lang.Number getRuleCount();
```

- *Type:* java.lang.Number

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags"></a>

```java
public Route53ResolverFirewallRuleGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a>

---

##### `firewallRulesInput`<sup>Optional</sup> <a name="firewallRulesInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupFirewallRules> getFirewallRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupConfig <a name="Route53ResolverFirewallRuleGroupConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupConfig;

Route53ResolverFirewallRuleGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .firewallRules(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupFirewallRules>)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53ResolverFirewallRuleGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules">firewallRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>></code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>></code> | Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallRules`<sup>Optional</sup> <a name="firewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupFirewallRules> getFirewallRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>>

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>>

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

### Route53ResolverFirewallRuleGroupFirewallRules <a name="Route53ResolverFirewallRuleGroupFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRules;

Route53ResolverFirewallRuleGroupFirewallRules.builder()
//  .action(java.lang.String)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .confidenceThreshold(java.lang.String)
//  .dnsThreatProtection(java.lang.String)
//  .firewallDomainListId(java.lang.String)
//  .firewallDomainRedirectionAction(java.lang.String)
//  .firewallRuleType(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType)
//  .firewallThreatProtectionId(java.lang.String)
//  .priority(java.lang.Number)
//  .qtype(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action">action</a></code> | <code>java.lang.String</code> | Rule Action. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | BlockOverrideDnsType. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | BlockOverrideDomain. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | BlockOverrideTtl. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | BlockResponse. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>java.lang.String</code> | DnsThreatProtection. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>java.lang.String</code> | FirewallDomainRedirectionAction. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType">firewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId">firewallThreatProtectionId</a></code> | <code>java.lang.String</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | Rule Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype">qtype</a></code> | <code>java.lang.String</code> | Qtype. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status">status</a></code> | <code>java.lang.String</code> | The status of the firewall rule. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#action Route53ResolverFirewallRuleGroup#action}

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

BlockOverrideDnsType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_dns_type Route53ResolverFirewallRuleGroup#block_override_dns_type}

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

BlockOverrideDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_domain Route53ResolverFirewallRuleGroup#block_override_domain}

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

BlockOverrideTtl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_ttl Route53ResolverFirewallRuleGroup#block_override_ttl}

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

BlockResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_response Route53ResolverFirewallRuleGroup#block_response}

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#confidence_threshold Route53ResolverFirewallRuleGroup#confidence_threshold}

---

##### `dnsThreatProtection`<sup>Optional</sup> <a name="dnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection"></a>

```java
public java.lang.String getDnsThreatProtection();
```

- *Type:* java.lang.String

DnsThreatProtection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#dns_threat_protection Route53ResolverFirewallRuleGroup#dns_threat_protection}

---

##### `firewallDomainListId`<sup>Optional</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_list_id Route53ResolverFirewallRuleGroup#firewall_domain_list_id}

---

##### `firewallDomainRedirectionAction`<sup>Optional</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction"></a>

```java
public java.lang.String getFirewallDomainRedirectionAction();
```

- *Type:* java.lang.String

FirewallDomainRedirectionAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_redirection_action Route53ResolverFirewallRuleGroup#firewall_domain_redirection_action}

---

##### `firewallRuleType`<sup>Optional</sup> <a name="firewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType getFirewallRuleType();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rule_type Route53ResolverFirewallRuleGroup#firewall_rule_type}

---

##### `firewallThreatProtectionId`<sup>Optional</sup> <a name="firewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId"></a>

```java
public java.lang.String getFirewallThreatProtectionId();
```

- *Type:* java.lang.String

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_threat_protection_id Route53ResolverFirewallRuleGroup#firewall_threat_protection_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Rule Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#priority Route53ResolverFirewallRuleGroup#priority}

---

##### `qtype`<sup>Optional</sup> <a name="qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype"></a>

```java
public java.lang.String getQtype();
```

- *Type:* java.lang.String

Qtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#qtype Route53ResolverFirewallRuleGroup#qtype}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#status Route53ResolverFirewallRuleGroup#status}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType;

Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.builder()
//  .firewallAdvancedContentCategory(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory)
//  .firewallAdvancedThreatCategory(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory)
//  .partnerThreatProtection(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory">firewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | Configuration for an advanced content category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory">firewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | Configuration for an advanced threat category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection">partnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | Configuration for a partner threat protection rule type. |

---

##### `firewallAdvancedContentCategory`<sup>Optional</sup> <a name="firewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory getFirewallAdvancedContentCategory();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

Configuration for an advanced content category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category Route53ResolverFirewallRuleGroup#firewall_advanced_content_category}

---

##### `firewallAdvancedThreatCategory`<sup>Optional</sup> <a name="firewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory getFirewallAdvancedThreatCategory();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

Configuration for an advanced threat category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category Route53ResolverFirewallRuleGroup#firewall_advanced_threat_category}

---

##### `partnerThreatProtection`<sup>Optional</sup> <a name="partnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection getPartnerThreatProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

Configuration for a partner threat protection rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection Route53ResolverFirewallRuleGroup#partner_threat_protection}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory;

Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.builder()
//  .category(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category">category</a></code> | <code>java.lang.String</code> | The content category value. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The content category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory;

Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.builder()
//  .category(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category">category</a></code> | <code>java.lang.String</code> | The threat category value. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The threat category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection;

Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.builder()
//  .partner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner">partner</a></code> | <code>java.lang.String</code> | The partner identifier value. |

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner"></a>

```java
public java.lang.String getPartner();
```

- *Type:* java.lang.String

The partner identifier value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#partner Route53ResolverFirewallRuleGroup#partner}

---

### Route53ResolverFirewallRuleGroupTags <a name="Route53ResolverFirewallRuleGroupTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupTags;

Route53ResolverFirewallRuleGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#key Route53ResolverFirewallRuleGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#value Route53ResolverFirewallRuleGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory">resetCategory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory"></a>

```java
public void resetCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory">resetCategory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory"></a>

```java
public void resetCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory">putFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory">putFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection">putPartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory">resetFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory">resetFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection">resetPartnerThreatProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallAdvancedContentCategory` <a name="putFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory"></a>

```java
public void putFirewallAdvancedContentCategory(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `putFirewallAdvancedThreatCategory` <a name="putFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory"></a>

```java
public void putFirewallAdvancedThreatCategory(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `putPartnerThreatProtection` <a name="putPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection"></a>

```java
public void putPartnerThreatProtection(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `resetFirewallAdvancedContentCategory` <a name="resetFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory"></a>

```java
public void resetFirewallAdvancedContentCategory()
```

##### `resetFirewallAdvancedThreatCategory` <a name="resetFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory"></a>

```java
public void resetFirewallAdvancedThreatCategory()
```

##### `resetPartnerThreatProtection` <a name="resetPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection"></a>

```java
public void resetPartnerThreatProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory">firewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory">firewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection">partnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput">firewallAdvancedContentCategoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput">firewallAdvancedThreatCategoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput">partnerThreatProtectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firewallAdvancedContentCategory`<sup>Required</sup> <a name="firewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference getFirewallAdvancedContentCategory();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a>

---

##### `firewallAdvancedThreatCategory`<sup>Required</sup> <a name="firewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference getFirewallAdvancedThreatCategory();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a>

---

##### `partnerThreatProtection`<sup>Required</sup> <a name="partnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference getPartnerThreatProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a>

---

##### `firewallAdvancedContentCategoryInput`<sup>Optional</sup> <a name="firewallAdvancedContentCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory getFirewallAdvancedContentCategoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `firewallAdvancedThreatCategoryInput`<sup>Optional</sup> <a name="firewallAdvancedThreatCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory getFirewallAdvancedThreatCategoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `partnerThreatProtectionInput`<sup>Optional</sup> <a name="partnerThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection getPartnerThreatProtectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner">resetPartner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartner` <a name="resetPartner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner"></a>

```java
public void resetPartner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput">partnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner">partner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partnerInput`<sup>Optional</sup> <a name="partnerInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput"></a>

```java
public java.lang.String getPartnerInput();
```

- *Type:* java.lang.String

---

##### `partner`<sup>Required</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner"></a>

```java
public java.lang.String getPartner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesList <a name="Route53ResolverFirewallRuleGroupFirewallRulesList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesList;

new Route53ResolverFirewallRuleGroupFirewallRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupFirewallRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>>

---


### Route53ResolverFirewallRuleGroupFirewallRulesOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference;

new Route53ResolverFirewallRuleGroupFirewallRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType">putFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType">resetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain">resetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl">resetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse">resetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection">resetDnsThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId">resetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction">resetFirewallDomainRedirectionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType">resetFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId">resetFirewallThreatProtectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype">resetQtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallRuleType` <a name="putFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType"></a>

```java
public void putFirewallRuleType(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetBlockOverrideDnsType` <a name="resetBlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType"></a>

```java
public void resetBlockOverrideDnsType()
```

##### `resetBlockOverrideDomain` <a name="resetBlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain"></a>

```java
public void resetBlockOverrideDomain()
```

##### `resetBlockOverrideTtl` <a name="resetBlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl"></a>

```java
public void resetBlockOverrideTtl()
```

##### `resetBlockResponse` <a name="resetBlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse"></a>

```java
public void resetBlockResponse()
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold"></a>

```java
public void resetConfidenceThreshold()
```

##### `resetDnsThreatProtection` <a name="resetDnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection"></a>

```java
public void resetDnsThreatProtection()
```

##### `resetFirewallDomainListId` <a name="resetFirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId"></a>

```java
public void resetFirewallDomainListId()
```

##### `resetFirewallDomainRedirectionAction` <a name="resetFirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction"></a>

```java
public void resetFirewallDomainRedirectionAction()
```

##### `resetFirewallRuleType` <a name="resetFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType"></a>

```java
public void resetFirewallRuleType()
```

##### `resetFirewallThreatProtectionId` <a name="resetFirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId"></a>

```java
public void resetFirewallThreatProtectionId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQtype` <a name="resetQtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype"></a>

```java
public void resetQtype()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType">firewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput">blockOverrideDnsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput">blockOverrideDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput">blockOverrideTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput">blockResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput">dnsThreatProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput">firewallDomainRedirectionActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput">firewallRuleTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput">firewallThreatProtectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput">qtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId">firewallThreatProtectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype">qtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firewallRuleType`<sup>Required</sup> <a name="firewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType"></a>

```java
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference getFirewallRuleType();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsTypeInput`<sup>Optional</sup> <a name="blockOverrideDnsTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput"></a>

```java
public java.lang.String getBlockOverrideDnsTypeInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomainInput`<sup>Optional</sup> <a name="blockOverrideDomainInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput"></a>

```java
public java.lang.String getBlockOverrideDomainInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtlInput`<sup>Optional</sup> <a name="blockOverrideTtlInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput"></a>

```java
public java.lang.Number getBlockOverrideTtlInput();
```

- *Type:* java.lang.Number

---

##### `blockResponseInput`<sup>Optional</sup> <a name="blockResponseInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput"></a>

```java
public java.lang.String getBlockResponseInput();
```

- *Type:* java.lang.String

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput"></a>

```java
public java.lang.String getConfidenceThresholdInput();
```

- *Type:* java.lang.String

---

##### `dnsThreatProtectionInput`<sup>Optional</sup> <a name="dnsThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput"></a>

```java
public java.lang.String getDnsThreatProtectionInput();
```

- *Type:* java.lang.String

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput"></a>

```java
public java.lang.String getFirewallDomainListIdInput();
```

- *Type:* java.lang.String

---

##### `firewallDomainRedirectionActionInput`<sup>Optional</sup> <a name="firewallDomainRedirectionActionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput"></a>

```java
public java.lang.String getFirewallDomainRedirectionActionInput();
```

- *Type:* java.lang.String

---

##### `firewallRuleTypeInput`<sup>Optional</sup> <a name="firewallRuleTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType getFirewallRuleTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `firewallThreatProtectionIdInput`<sup>Optional</sup> <a name="firewallThreatProtectionIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput"></a>

```java
public java.lang.String getFirewallThreatProtectionIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `qtypeInput`<sup>Optional</sup> <a name="qtypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput"></a>

```java
public java.lang.String getQtypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

---

##### `dnsThreatProtection`<sup>Required</sup> <a name="dnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection"></a>

```java
public java.lang.String getDnsThreatProtection();
```

- *Type:* java.lang.String

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

---

##### `firewallDomainRedirectionAction`<sup>Required</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction"></a>

```java
public java.lang.String getFirewallDomainRedirectionAction();
```

- *Type:* java.lang.String

---

##### `firewallThreatProtectionId`<sup>Required</sup> <a name="firewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId"></a>

```java
public java.lang.String getFirewallThreatProtectionId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `qtype`<sup>Required</sup> <a name="qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype"></a>

```java
public java.lang.String getQtype();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>

---


### Route53ResolverFirewallRuleGroupTagsList <a name="Route53ResolverFirewallRuleGroupTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupTagsList;

new Route53ResolverFirewallRuleGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get"></a>

```java
public Route53ResolverFirewallRuleGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53ResolverFirewallRuleGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>>

---


### Route53ResolverFirewallRuleGroupTagsOutputReference <a name="Route53ResolverFirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_firewall_rule_group.Route53ResolverFirewallRuleGroupTagsOutputReference;

new Route53ResolverFirewallRuleGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverFirewallRuleGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>

---



