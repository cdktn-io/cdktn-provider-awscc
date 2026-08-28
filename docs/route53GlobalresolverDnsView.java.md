# `route53GlobalresolverDnsView` Submodule <a name="`route53GlobalresolverDnsView` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverDnsView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverDnsView <a name="Route53GlobalresolverDnsView" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view awscc_route53globalresolver_dns_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsView;

Route53GlobalresolverDnsView.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalResolverId(java.lang.String)
    .name(java.lang.String)
//  .clientToken(java.lang.String)
//  .description(java.lang.String)
//  .dnssecValidation(java.lang.String)
//  .ednsClientSubnet(java.lang.String)
//  .firewallRulesFailOpen(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53GlobalresolverDnsViewTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#global_resolver_id Route53GlobalresolverDnsView#global_resolver_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#name Route53GlobalresolverDnsView#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#client_token Route53GlobalresolverDnsView#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#description Route53GlobalresolverDnsView#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.dnssecValidation">dnssecValidation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#dnssec_validation Route53GlobalresolverDnsView#dnssec_validation}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.ednsClientSubnet">ednsClientSubnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#edns_client_subnet Route53GlobalresolverDnsView#edns_client_subnet}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.firewallRulesFailOpen">firewallRulesFailOpen</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#firewall_rules_fail_open Route53GlobalresolverDnsView#firewall_rules_fail_open}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#tags Route53GlobalresolverDnsView#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.globalResolverId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#global_resolver_id Route53GlobalresolverDnsView#global_resolver_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#name Route53GlobalresolverDnsView#name}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#client_token Route53GlobalresolverDnsView#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#description Route53GlobalresolverDnsView#description}.

---

##### `dnssecValidation`<sup>Optional</sup> <a name="dnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.dnssecValidation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#dnssec_validation Route53GlobalresolverDnsView#dnssec_validation}.

---

##### `ednsClientSubnet`<sup>Optional</sup> <a name="ednsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.ednsClientSubnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#edns_client_subnet Route53GlobalresolverDnsView#edns_client_subnet}.

---

##### `firewallRulesFailOpen`<sup>Optional</sup> <a name="firewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.firewallRulesFailOpen"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#firewall_rules_fail_open Route53GlobalresolverDnsView#firewall_rules_fail_open}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#tags Route53GlobalresolverDnsView#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDnssecValidation">resetDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetEdnsClientSubnet">resetEdnsClientSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetFirewallRulesFailOpen">resetFirewallRulesFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53GlobalresolverDnsViewTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDnssecValidation` <a name="resetDnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDnssecValidation"></a>

```java
public void resetDnssecValidation()
```

##### `resetEdnsClientSubnet` <a name="resetEdnsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetEdnsClientSubnet"></a>

```java
public void resetEdnsClientSubnet()
```

##### `resetFirewallRulesFailOpen` <a name="resetFirewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetFirewallRulesFailOpen"></a>

```java
public void resetFirewallRulesFailOpen()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverDnsView resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsView;

Route53GlobalresolverDnsView.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsView;

Route53GlobalresolverDnsView.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsView;

Route53GlobalresolverDnsView.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsView;

Route53GlobalresolverDnsView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53GlobalresolverDnsView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53GlobalresolverDnsView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53GlobalresolverDnsView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53GlobalresolverDnsView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverDnsView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnsViewId">dnsViewId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList">Route53GlobalresolverDnsViewTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidationInput">dnssecValidationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnetInput">ednsClientSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpenInput">firewallRulesFailOpenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverIdInput">globalResolverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidation">dnssecValidation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnet">ednsClientSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpen">firewallRulesFailOpen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dnsViewId`<sup>Required</sup> <a name="dnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnsViewId"></a>

```java
public java.lang.String getDnsViewId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tags"></a>

```java
public Route53GlobalresolverDnsViewTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList">Route53GlobalresolverDnsViewTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnssecValidationInput`<sup>Optional</sup> <a name="dnssecValidationInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidationInput"></a>

```java
public java.lang.String getDnssecValidationInput();
```

- *Type:* java.lang.String

---

##### `ednsClientSubnetInput`<sup>Optional</sup> <a name="ednsClientSubnetInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnetInput"></a>

```java
public java.lang.String getEdnsClientSubnetInput();
```

- *Type:* java.lang.String

---

##### `firewallRulesFailOpenInput`<sup>Optional</sup> <a name="firewallRulesFailOpenInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpenInput"></a>

```java
public java.lang.String getFirewallRulesFailOpenInput();
```

- *Type:* java.lang.String

---

##### `globalResolverIdInput`<sup>Optional</sup> <a name="globalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverIdInput"></a>

```java
public java.lang.String getGlobalResolverIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverDnsViewTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnssecValidation`<sup>Required</sup> <a name="dnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidation"></a>

```java
public java.lang.String getDnssecValidation();
```

- *Type:* java.lang.String

---

##### `ednsClientSubnet`<sup>Required</sup> <a name="ednsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnet"></a>

```java
public java.lang.String getEdnsClientSubnet();
```

- *Type:* java.lang.String

---

##### `firewallRulesFailOpen`<sup>Required</sup> <a name="firewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpen"></a>

```java
public java.lang.String getFirewallRulesFailOpen();
```

- *Type:* java.lang.String

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverId"></a>

```java
public java.lang.String getGlobalResolverId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverDnsViewConfig <a name="Route53GlobalresolverDnsViewConfig" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsViewConfig;

Route53GlobalresolverDnsViewConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalResolverId(java.lang.String)
    .name(java.lang.String)
//  .clientToken(java.lang.String)
//  .description(java.lang.String)
//  .dnssecValidation(java.lang.String)
//  .ednsClientSubnet(java.lang.String)
//  .firewallRulesFailOpen(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53GlobalresolverDnsViewTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#global_resolver_id Route53GlobalresolverDnsView#global_resolver_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#name Route53GlobalresolverDnsView#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#client_token Route53GlobalresolverDnsView#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#description Route53GlobalresolverDnsView#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dnssecValidation">dnssecValidation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#dnssec_validation Route53GlobalresolverDnsView#dnssec_validation}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.ednsClientSubnet">ednsClientSubnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#edns_client_subnet Route53GlobalresolverDnsView#edns_client_subnet}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.firewallRulesFailOpen">firewallRulesFailOpen</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#firewall_rules_fail_open Route53GlobalresolverDnsView#firewall_rules_fail_open}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#tags Route53GlobalresolverDnsView#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.globalResolverId"></a>

```java
public java.lang.String getGlobalResolverId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#global_resolver_id Route53GlobalresolverDnsView#global_resolver_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#name Route53GlobalresolverDnsView#name}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#client_token Route53GlobalresolverDnsView#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#description Route53GlobalresolverDnsView#description}.

---

##### `dnssecValidation`<sup>Optional</sup> <a name="dnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dnssecValidation"></a>

```java
public java.lang.String getDnssecValidation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#dnssec_validation Route53GlobalresolverDnsView#dnssec_validation}.

---

##### `ednsClientSubnet`<sup>Optional</sup> <a name="ednsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.ednsClientSubnet"></a>

```java
public java.lang.String getEdnsClientSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#edns_client_subnet Route53GlobalresolverDnsView#edns_client_subnet}.

---

##### `firewallRulesFailOpen`<sup>Optional</sup> <a name="firewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.firewallRulesFailOpen"></a>

```java
public java.lang.String getFirewallRulesFailOpen();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#firewall_rules_fail_open Route53GlobalresolverDnsView#firewall_rules_fail_open}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverDnsViewTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#tags Route53GlobalresolverDnsView#tags}.

---

### Route53GlobalresolverDnsViewTags <a name="Route53GlobalresolverDnsViewTags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsViewTags;

Route53GlobalresolverDnsViewTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#key Route53GlobalresolverDnsView#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#value Route53GlobalresolverDnsView#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#key Route53GlobalresolverDnsView#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_dns_view#value Route53GlobalresolverDnsView#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverDnsViewTagsList <a name="Route53GlobalresolverDnsViewTagsList" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsViewTagsList;

new Route53GlobalresolverDnsViewTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.get"></a>

```java
public Route53GlobalresolverDnsViewTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverDnsViewTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>>

---


### Route53GlobalresolverDnsViewTagsOutputReference <a name="Route53GlobalresolverDnsViewTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_dns_view.Route53GlobalresolverDnsViewTagsOutputReference;

new Route53GlobalresolverDnsViewTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53GlobalresolverDnsViewTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>

---



