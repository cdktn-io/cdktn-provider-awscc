# `route53RecoverycontrolRoutingControl` Submodule <a name="`route53RecoverycontrolRoutingControl` Submodule" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolRoutingControl <a name="Route53RecoverycontrolRoutingControl" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control awscc_route53recoverycontrol_routing_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_routing_control.Route53RecoverycontrolRoutingControl;

Route53RecoverycontrolRoutingControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .clusterArn(java.lang.String)
//  .controlPanelArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the routing control. You can use any non-white space character in the name. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Arn associated with Control Panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the control panel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the routing control. You can use any non-white space character in the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#name Route53RecoverycontrolRoutingControl#name}

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

Arn associated with Control Panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#cluster_arn Route53RecoverycontrolRoutingControl#cluster_arn}

---

##### `controlPanelArn`<sup>Optional</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.controlPanelArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#control_panel_arn Route53RecoverycontrolRoutingControl#control_panel_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetControlPanelArn">resetControlPanelArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetClusterArn"></a>

```java
public void resetClusterArn()
```

##### `resetControlPanelArn` <a name="resetControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetControlPanelArn"></a>

```java
public void resetControlPanelArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolRoutingControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_routing_control.Route53RecoverycontrolRoutingControl;

Route53RecoverycontrolRoutingControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_routing_control.Route53RecoverycontrolRoutingControl;

Route53RecoverycontrolRoutingControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_routing_control.Route53RecoverycontrolRoutingControl;

Route53RecoverycontrolRoutingControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_routing_control.Route53RecoverycontrolRoutingControl;

Route53RecoverycontrolRoutingControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53RecoverycontrolRoutingControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53RecoverycontrolRoutingControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53RecoverycontrolRoutingControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53RecoverycontrolRoutingControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolRoutingControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.routingControlArn">routingControlArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArnInput">controlPanelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routingControlArn`<sup>Required</sup> <a name="routingControlArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.routingControlArn"></a>

```java
public java.lang.String getRoutingControlArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `controlPanelArnInput`<sup>Optional</sup> <a name="controlPanelArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArnInput"></a>

```java
public java.lang.String getControlPanelArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArn"></a>

```java
public java.lang.String getControlPanelArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolRoutingControlConfig <a name="Route53RecoverycontrolRoutingControlConfig" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_routing_control.Route53RecoverycontrolRoutingControlConfig;

Route53RecoverycontrolRoutingControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .clusterArn(java.lang.String)
//  .controlPanelArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the routing control. You can use any non-white space character in the name. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Arn associated with Control Panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the control panel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the routing control. You can use any non-white space character in the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#name Route53RecoverycontrolRoutingControl#name}

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Arn associated with Control Panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#cluster_arn Route53RecoverycontrolRoutingControl#cluster_arn}

---

##### `controlPanelArn`<sup>Optional</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.controlPanelArn"></a>

```java
public java.lang.String getControlPanelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#control_panel_arn Route53RecoverycontrolRoutingControl#control_panel_arn}

---



