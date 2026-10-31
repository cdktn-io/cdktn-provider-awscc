# `ec2TransitGatewayAttachmentNatConfiguration` Submodule <a name="`ec2TransitGatewayAttachmentNatConfiguration` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayAttachmentNatConfiguration <a name="Ec2TransitGatewayAttachmentNatConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfiguration;

Ec2TransitGatewayAttachmentNatConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .natGatewayRules(IResolvable|java.util.List<Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules>)
    .natGatewaySupport(java.lang.String)
    .transitGatewayAttachmentId(java.lang.String)
//  .natSystemRouteSupport(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.natGatewayRules">natGatewayRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>></code> | The complete set of NAT rules for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.natGatewaySupport">natGatewaySupport</a></code> | <code>java.lang.String</code> | Whether NAT gateway support is enabled on the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway attachment to configure NAT on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.natSystemRouteSupport">natSystemRouteSupport</a></code> | <code>java.lang.String</code> | Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `natGatewayRules`<sup>Required</sup> <a name="natGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.natGatewayRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>>

The complete set of NAT rules for the attachment.

Updating this property replaces the entire rule set: rules omitted from the new value are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_rules Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_rules}

---

##### `natGatewaySupport`<sup>Required</sup> <a name="natGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.natGatewaySupport"></a>

- *Type:* java.lang.String

Whether NAT gateway support is enabled on the attachment.

Set to disable to stage NAT rules without activating them; the rules are retained and become active when this is later set to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_support Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_support}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

The ID of the transit gateway attachment to configure NAT on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#transit_gateway_attachment_id Ec2TransitGatewayAttachmentNatConfiguration#transit_gateway_attachment_id}

---

##### `natSystemRouteSupport`<sup>Optional</sup> <a name="natSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.natSystemRouteSupport"></a>

- *Type:* java.lang.String

Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment.

Whether this is configurable depends on the attachment; where the value is forced, supplying the opposite value is rejected. Omitting this property leaves the setting to the service: on a new configuration the service applies the attachment's default, but on an attachment where the value is configurable it keeps the value already in effect rather than reverting to that default. Removing this property from a template, or deleting this resource, therefore leaves the setting at its last value rather than restoring the default, and a resource later created on the same attachment without this property inherits that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_system_route_support Ec2TransitGatewayAttachmentNatConfiguration#nat_system_route_support}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules">putNatGatewayRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetNatSystemRouteSupport">resetNatSystemRouteSupport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNatGatewayRules` <a name="putNatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules"></a>

```java
public void putNatGatewayRules(IResolvable|java.util.List<Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>>

---

##### `resetNatSystemRouteSupport` <a name="resetNatSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetNatSystemRouteSupport"></a>

```java
public void resetNatSystemRouteSupport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfiguration;

Ec2TransitGatewayAttachmentNatConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfiguration;

Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfiguration;

Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfiguration;

Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayAttachmentNatConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayAttachmentNatConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayAttachmentNatConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules">natGatewayRules</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRulesInput">natGatewayRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupportInput">natGatewaySupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupportInput">natSystemRouteSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport">natGatewaySupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport">natSystemRouteSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `natGatewayRules`<sup>Required</sup> <a name="natGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules"></a>

```java
public Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList getNatGatewayRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a>

---

##### `natGatewayRulesInput`<sup>Optional</sup> <a name="natGatewayRulesInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRulesInput"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules> getNatGatewayRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>>

---

##### `natGatewaySupportInput`<sup>Optional</sup> <a name="natGatewaySupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupportInput"></a>

```java
public java.lang.String getNatGatewaySupportInput();
```

- *Type:* java.lang.String

---

##### `natSystemRouteSupportInput`<sup>Optional</sup> <a name="natSystemRouteSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupportInput"></a>

```java
public java.lang.String getNatSystemRouteSupportInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `natGatewaySupport`<sup>Required</sup> <a name="natGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport"></a>

```java
public java.lang.String getNatGatewaySupport();
```

- *Type:* java.lang.String

---

##### `natSystemRouteSupport`<sup>Required</sup> <a name="natSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport"></a>

```java
public java.lang.String getNatSystemRouteSupport();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayAttachmentNatConfigurationConfig <a name="Ec2TransitGatewayAttachmentNatConfigurationConfig" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfigurationConfig;

Ec2TransitGatewayAttachmentNatConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .natGatewayRules(IResolvable|java.util.List<Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules>)
    .natGatewaySupport(java.lang.String)
    .transitGatewayAttachmentId(java.lang.String)
//  .natSystemRouteSupport(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewayRules">natGatewayRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>></code> | The complete set of NAT rules for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewaySupport">natGatewaySupport</a></code> | <code>java.lang.String</code> | Whether NAT gateway support is enabled on the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway attachment to configure NAT on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natSystemRouteSupport">natSystemRouteSupport</a></code> | <code>java.lang.String</code> | Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `natGatewayRules`<sup>Required</sup> <a name="natGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewayRules"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules> getNatGatewayRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>>

The complete set of NAT rules for the attachment.

Updating this property replaces the entire rule set: rules omitted from the new value are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_rules Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_rules}

---

##### `natGatewaySupport`<sup>Required</sup> <a name="natGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewaySupport"></a>

```java
public java.lang.String getNatGatewaySupport();
```

- *Type:* java.lang.String

Whether NAT gateway support is enabled on the attachment.

Set to disable to stage NAT rules without activating them; the rules are retained and become active when this is later set to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_support Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_support}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

The ID of the transit gateway attachment to configure NAT on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#transit_gateway_attachment_id Ec2TransitGatewayAttachmentNatConfiguration#transit_gateway_attachment_id}

---

##### `natSystemRouteSupport`<sup>Optional</sup> <a name="natSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natSystemRouteSupport"></a>

```java
public java.lang.String getNatSystemRouteSupport();
```

- *Type:* java.lang.String

Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment.

Whether this is configurable depends on the attachment; where the value is forced, supplying the opposite value is rejected. Omitting this property leaves the setting to the service: on a new configuration the service applies the attachment's default, but on an attachment where the value is configurable it keeps the value already in effect rather than reverting to that default. Removing this property from a template, or deleting this resource, therefore leaves the setting at its last value rather than restoring the default, and a resource later created on the same attachment without this property inherits that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_system_route_support Ec2TransitGatewayAttachmentNatConfiguration#nat_system_route_support}

---

### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules;

Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.builder()
    .matchSourceCidr(java.lang.String)
    .natCidr(java.lang.String)
    .ruleNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.matchSourceCidr">matchSourceCidr</a></code> | <code>java.lang.String</code> | The source CIDR that the rule matches on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.natCidr">natCidr</a></code> | <code>java.lang.String</code> | The CIDR that the matched source addresses are translated to. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | The rule number. |

---

##### `matchSourceCidr`<sup>Required</sup> <a name="matchSourceCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.matchSourceCidr"></a>

```java
public java.lang.String getMatchSourceCidr();
```

- *Type:* java.lang.String

The source CIDR that the rule matches on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#match_source_cidr Ec2TransitGatewayAttachmentNatConfiguration#match_source_cidr}

---

##### `natCidr`<sup>Required</sup> <a name="natCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.natCidr"></a>

```java
public java.lang.String getNatCidr();
```

- *Type:* java.lang.String

The CIDR that the matched source addresses are translated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_cidr Ec2TransitGatewayAttachmentNatConfiguration#nat_cidr}

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.ruleNumber"></a>

```java
public java.lang.Number getRuleNumber();
```

- *Type:* java.lang.Number

The rule number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#rule_number Ec2TransitGatewayAttachmentNatConfiguration#rule_number}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList;

new Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get"></a>

```java
public Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>>

---


### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_attachment_nat_configuration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference;

new Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidrInput">matchSourceCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidrInput">natCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumberInput">ruleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr">matchSourceCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr">natCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchSourceCidrInput`<sup>Optional</sup> <a name="matchSourceCidrInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidrInput"></a>

```java
public java.lang.String getMatchSourceCidrInput();
```

- *Type:* java.lang.String

---

##### `natCidrInput`<sup>Optional</sup> <a name="natCidrInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidrInput"></a>

```java
public java.lang.String getNatCidrInput();
```

- *Type:* java.lang.String

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumberInput"></a>

```java
public java.lang.Number getRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `matchSourceCidr`<sup>Required</sup> <a name="matchSourceCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr"></a>

```java
public java.lang.String getMatchSourceCidr();
```

- *Type:* java.lang.String

---

##### `natCidr`<sup>Required</sup> <a name="natCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr"></a>

```java
public java.lang.String getNatCidr();
```

- *Type:* java.lang.String

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber"></a>

```java
public java.lang.Number getRuleNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>

---



